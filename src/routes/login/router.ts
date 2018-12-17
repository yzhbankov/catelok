import expres from 'express';

export default class Login {
    public router: expres.Router;

    constructor() {
        this.router = expres.Router();
        this.routes();
    }

    private routes() {
        this.router.get('/:id', this.login)
    }

    private login = (req: expres.Request, res: expres.Response, next:expres.NextFunction) => {
        try {
            res.json({id: req.params.id})
        } catch(err) {
            next(err)
        }
    }
}
