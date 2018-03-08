import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { Router } from 'express';
import { Functions } from './controller/functions'

const router = Router();



// Creates and configures an ExpressJS web server.
class App {
    public express: express.Application;

    constructor() {
        // todo: prepare your db credentials, promise modifiers etc here

        this.express = express();
        this.middleware();
        this.routes();

        console.log("\n");
        console.log("Server is run on port 3000");
        console.log("Now configure your routes and everything should work!");

        // todo: prepare your db here
    }
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        let router = express.Router();
        // placeholder route handler
        router.post('/login/', Functions.login);
        router.get('/getDoctors', Functions.getDoctors);
        router.get('/getCollectors', Functions.getCollectors)
        router.get('/getReportsForDoctor/:drEmail', Functions.getReportsForDoctor);
        router.get('/getReports/', Functions.getReports);
        router.get('/getReport/:code', Functions.getReport);
        router.post('/addEmployee/', Functions.addEmployee);
        router.post('/addReport/', Functions.addReport);
        router.post('/diagnosedReport/', Functions.diagnosedReport);
        router.post('/updateReport/', Functions.updateReport);
        router.post('/updateEmp/', Functions.updateEmp);
        router.post('/changeEmpStatus/', Functions.changeEmpStatus);
        router.delete('/delete/:id', Functions.delete);
        router.put('/add/:id', Functions.put);

        this.express.use('/api/', router);
    }
}

export default new App().express;
