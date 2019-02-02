import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import compression from 'compression';
import { services } from './services';
import { routers } from './routers';
// Load environment variables default values

dotenv.config();
class Server {
    /**
     * @param routers - Router Class (See router folder)
     * @param services - All exported services object, for manual DI (See services folder)
     */
    constructor(routers, services) {
        this.PORT = process.env.PORT || 8080;
        this.express = express();
        this.routers = routers;
        this.services = services;
        this.init();
    }

    init() {
        console.log(`Starting Allocation Services`);
        this.initMiddlewares();
        this.initRouters();
        this.initHandlers();
    }

    initMiddlewares() {
        console.log('Starting middlewares...');
        this.express.use(bodyParser.json()); // for parsing application/json
        this.express.use(compression()); // compress all responses
        this.express.use(morgan('dev')); // logging middleware
    }

    initRouters() {
        console.log('Starting routers...');
        for (const i in this.routers) {
            /**
             * Pass all services to router for DI
             */
            const Router = this.routers[i];
            const router = new Router(this.services);
            this.express.use(`/${router.prefix}`, router.express);
        }
    }

    initHandlers() {
      // this handles a standard json return
        this.express.use(this.services.handler.handleData);
        this.services.handler.handleGlobalErrors();
    }

    start() {
        this.express.listen(this.PORT, () => {
            console.log(`App listening to ${this.PORT}....`);
        });
    }
}

/////////////////////////////
// Mongoose
/////////////////////////////
mongoose.connect(process.env.DB_URL);
mongoose.Promise = Promise;

const server = new Server(routers, services);
server.start();

