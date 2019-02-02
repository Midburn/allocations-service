import express from 'express';

export class BucketsRouter {

    constructor(services) {
        this.prefix = 'buckets';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting rounds router...');
        this.express.route('/').get(async (req, res, next) => {
            try {
                // const data = await this.services.rounds.getBuckets(req.query);
                const data = await this.services.buckets.getBuckets(req.body);
                return next({ status: 200, data });
            } catch (e) {
                return next({ status: 500, data: e });
            }
        });
        this.express.route('/create').post(async (req, res, next) => {
            try {
                // const data = await this.services.rounds.getBuckets(req.query);
                const data = await this.services.buckets.createBucket(req.body);
                return next({ status: 200, data });
            } catch (e) {
                console.log('There was a problem with your query: ', e)
                return next({ status: 500, data: e });
            }
        });
    }
}