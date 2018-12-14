"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

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
