const express = require('express');
const cors = require('cors');
const { dbConection } = require('../DB/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //paths
        this.paths = {
            conocimientosPath: '/api/conocimientos',
            proyectosPath: '/api/proyectos'
        }

        //Conectar a base de datos

        this.conectarDB();

        //Middlewares

        this.middlewares();

        //Rutas de la aplicación;

        this.routes();

    }

    async conectarDB() {
        await dbConection();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body

        this.app.use( express.json() );

        //Directorio Público

        this.app.use( express.static('public'));

    }

    routes() {
        this.app.use(this.paths.conocimientosPath, require('../routes/conocimientosRoutes'));
        this.app.use(this.paths.proyectosPath, require('../routes/proyectosRoutes'));
        this.app.use('*', express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }

}

module.exports = Server;