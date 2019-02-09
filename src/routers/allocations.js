import express from 'express';

export class AllocationsRouter {

    constructor(services) {
        this.prefix = 'allocations';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting allocations router...');
        // ----------------  GET ----------------//
        this.express.route('/').get(async (req, res, next) => {
            try {
                // const data = await this.services.rounds.getBuckets(req.query);
                const data = await this.services.allocations.getAllocations(req.body);
                return next({ status: 200, data });
            } catch (e) {
                console.log('There was a problem with your query: ', e)
                return next({ status: 500, data: e });
            }
        });
        // ----------------  CREATE  ----------------//
        this.express.route('/create').post(async (req, res, next) => {
            try {
                // const data = await this.services.rounds.getBuckets(req.query);

                const id = req.params.id
                const data = await this.services.allocations.createAllocation(req.body, id);
                return next({ status: 200, data });
            } catch (e) {
                console.log('There was a problem with your query: ', e)
                return next({ status: 500, data: e });
            }
        });
    }
}