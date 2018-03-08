"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express_1 = require("express");
const functions_1 = require("./controller/functions");
const router = express_1.Router();
// Creates and configures an ExpressJS web server.
class App {
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
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        // placeholder route handler
        router.post('/login/', functions_1.Functions.login);
        router.get('/getDoctors', functions_1.Functions.getDoctors);
        router.get('/getCollectors', functions_1.Functions.getCollectors);
        router.get('/getReportsForDoctor/:drEmail', functions_1.Functions.getReportsForDoctor);
        router.get('/getReports/', functions_1.Functions.getReports);
        router.get('/getReport/:code', functions_1.Functions.getReport);
        router.post('/addEmployee/', functions_1.Functions.addEmployee);
        router.post('/addReport/', functions_1.Functions.addReport);
        router.post('/diagnosedReport/', functions_1.Functions.diagnosedReport);
        router.post('/updateReport/', functions_1.Functions.updateReport);
        router.post('/updateEmp/', functions_1.Functions.updateEmp);
        router.post('/changeEmpStatus/', functions_1.Functions.changeEmpStatus);
        router.delete('/delete/:id', functions_1.Functions.delete);
        router.put('/add/:id', functions_1.Functions.put);
        this.express.use('/api/', router);
    }
}
exports.default = new App().express;
