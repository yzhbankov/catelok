"use strict";

import bodyParser from "body-parser";
import express from "express";

import Login from "./routes/login/router";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))

        this.app.use('/login', new Login().router);
    }
}

export default new App().app;
