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
    // ----------------  GET ----------------//
    this.express.route('/').get(async (req, res, next) => {
      try {
        const data = await this.services.rounds.getRounds();
        return next({ status: 200, data });
      } catch (e) {
        return next({ status: 500, data: e });
      }
    });

    // ----------------  CREATE  ----------------//
    this.express.route('/create').post(async (req, res, next) => {
      try {
        const data = await this.services.rounds.createRound(req.body);
        return next({ status: 200, data });
      } catch (e) {
        console.log('There was a problem with your query: ', e)
        return next({ status: 500, data: e });
      }
    });
  }
}