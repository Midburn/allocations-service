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

    this.express.route('/:eventId/:basedEventId').get(async (req, res, next) => {
      try {
        const { eventId, basedEventId } = req.params
        // console.log('req.params', req.params)
        const data = await this.services.rounds.byEventId(eventId, basedEventId);

        return next({ status: 200, data });
      } catch (e) {
        console.log('There was a problem with your query: ', e)
        return next({ status: 500, data: e });
      }
    });

    this.express.route('/:eventId/:basedEventId/:allocationType').get(async (req, res, next) => {
      try {
        const { eventId, basedEventId, allocationType } = req.params
        const data = await this.services.rounds.byAllocation(eventId, basedEventId, allocationType);

        return next({ status: 200, data });
      } catch (e) {
        console.log('There was a problem with your query: ', e)
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