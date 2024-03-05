const express = require('express');
const cors = require('cors');

const usuario_routes = require('../routes/user');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Midlewares
        this.midlewares();

        //rutas de mi aplicacion

        this.routes();
    }

    midlewares() {
        //CORS
        this.app.use(cors());

        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/user', usuario_routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Port ${this.port}`);
        });
    }

}

module.exports = Server;