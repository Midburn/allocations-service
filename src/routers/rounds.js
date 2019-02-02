import express from 'express';

export class RoundsRouter {

    constructor(services) {
        this.prefix = 'rounds';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting rounds router...');
        this.express.route('/').get(async (req, res, next) => {
            try {
                const mobiData = await this.services.round.getGroups(req.query);
                return next(mobiData);
            } catch (e) {
                let content = this.services.parsing.parseMobiError(e);
                return next(content);
            }
        });
    }

}