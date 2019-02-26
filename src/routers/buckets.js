import express from 'express';
export class BucketsRouter {

  constructor(services) {
    this.prefix = 'buckets';
    this.services = services;
    this.express = express.Router();
    this.init();
  }

  init() {
    console.log('Starting buckets router...');
    // ----------------  GET ----------------//
    this.express.route('/').get(async (req, res, next) => {
      try {
        // const data = await this.services.rounds.getBuckets(req.query);
        const data = await this.services.buckets.getBuckets(req.body);
        return next({ status: 200, data });
      } catch (e) {
        return next({ status: 500, data: e });
      }
    });

    this.express.route('/byEventAndAllocationType').get(async (req, res, next) => {
      try {
        const data = await this.services.buckets.getBucketByAllocationTypeAndEventId(req.query);
        return next({ status: 200, data });
      } catch (e) {
        return next({ status: 500, data: e });
      }
    });
  
    this.express.route('/:eventId/:basedEventId/:allocationType').get(async (req, res, next) => {
      try {
        const { eventId, basedEventId, allocationType } = req.params
        const data = await this.services.buckets.sumByAllocation(eventId, basedEventId, allocationType);
        return next({ status: 200, data });
      } catch (e) {
        console.log('There was a problem with your query: ', e)
        return next({ status: 500, data: e });
      }
    });

    // ----------------  CREATE  ----------------//
    this.express.route('/create').post(async (req, res, next) => {
      try {
        const data = await this.services.buckets.createBucket(req.body);
        return next({ status: 200, data });
      } catch (e) {
        console.log('There was a problem with your query: ', e)
        return next({ status: 500, data: e });
      }
    });
    this.express.route('/updateMany').post(async (req, res, next) => {
      try {
        const data = await this.services.buckets.updateBuckets(req.body);
        return next({ status: 200, data });
      } catch (e) {
        console.log('There was a problem with your query: ', e)
        return next({ status: 500, data: e });
      }
    });
    this.express.route('/:id').get(async (req, res, next) => {
      try {
        const { id } = req.params
        const data = await this.services.buckets.getBucketById(id);
        return next({ status: 200, data });
      } catch (e) {
        return next({ status: 500, data: e });
      }
    });
  }
}