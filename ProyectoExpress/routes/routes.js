const mssql = require('mssql');
const config = require('../data/config');

//ruta de la app
const router = app => {
    //mostrar mensaje de bienvenida en el root
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API!'
        });
    });
    //mostrar todos los usuarios
    app.get('/users', (request, response) => {
        mssql.connect(config, function(err){
            if(err) console.log(err);

            var request = new mssql.Request();

            request.query('select * from users', function (err, results){
                if(err) console.log(err)

                response.send(results);
            });
        });
    });

    app.get('/users/:id', (request, response) => {
        mssql.connect(config, function(err){

            const id = request.params.id;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("select * from users where id = " + id, function (err, results){
                if(err) console.log(err)

                response.send(results);
            });
        });
    });

    app.post('/users', (request, response) => {
        mssql.connect(config, function(err){

            const id = request.params.id;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("INSERT INTO users SET ?",request.body, function (err, results){
                if(err) console.log(err)

                renspose.status(201).send(`User added with ID: ${result.insertID}`);
            });
        });
    });

    app.put('/users/:id', (request, response) => {
        mssql.connect(config, function(err){

            const id = request.params.id;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("INSERT INTO users SET ? WHERE Id = "+id, [request.body, id], function (err, results){
                if(err) console.log(err)

                response.send('User updated succesfully');
            });
        });
    });

    app.delete('/users/:id', (request, response) => {
        mssql.connect(config, function(err){

            const id = request.params.id;

            if(err) console.log(err);

            var req = new mssql.Request();

            req.query("DELETE FROM users WHERE Id = "+id, function (err, results){
                if(err) console.log(err)

                response.send('User deleted');
            });
        });
    });

}

//Importar el router
module.exports = router;