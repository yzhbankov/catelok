"use strict";

import bodyParser from "body-parser";
import express from "express";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }
}

export default new App().app;
