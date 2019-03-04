import express from 'express';

export class AllocationsRouter {
  constructor (services) {
    this.prefix = 'allocations';
    this.services = services;
    this.express = express.Router ();
    this.init ();
  }

  init () {
    console.log ('Starting allocations router...');

    // ----------------  GET ----------------//
    this.express.route ('/').get (async (req, res, next) => {
      try {
        // const data = await this.services.rounds.getBuckets(req.query);
        const data = await this.services.allocations.getAllocations (req.body);
        return next ({status: 200, data});
      } catch (e) {
        console.log ('There was a problem with your query: ', e);
        return next ({status: 500, data: e});
      }
    });

    this.express.route ('/buckets/:bucket_id').get (async (req, res, next) => {
      try {
        const {bucket_id} = req.params;
        if (!bucket_id) {
          throw new Error ('Must supply bucket_id param');
        }
        const data = await this.services.allocations.getAllocationsByBucketId (
          bucket_id
        );
        return next ({status: 200, data});
      } catch (e) {
        console.log ('There was a problem with your query: ', e);
        return next ({status: 500, data: e});
      }
    });


    this.express.route ('/getAllocationsByUsers').get (async (req, res, next) => {
      try {
        console.log('req.params', req.body)
        const { users, roundId } = req.body;
        if (!users || !roundId) {
          throw new Error ('Must supply users and roundId params');
        }
        const data = await this.services.allocations.getAllocationsByUsers (
          users,
          roundId
        );
        return next ({status: 200, data});
      } catch (e) {
        console.log ('There was a problem with your query: ', e);
        return next ({status: 500, data: e});
      }
    });


    // ----------------  CREATE  ----------------//
    this.express.route ('/create').post (async (req, res, next) => {
      try {
        const data = await this.services.allocations.createAllocation (
          req.body
        );
        return next ({status: 200, data});
      } catch (e) {
        console.log ('There was a problem with your query: ', e);
        return next ({status: 500, data: e});
      }
    });

    // ----------------  UPDATE  ----------------//
    this.express.route ('/update').put (async (req, res, next) => {
      try {
        if (!req.body._id) {
          throw new Error ('Must specify _id for updating allocation');
        }
        await this.services.allocations.updateAllocation (req.body);
        return next ({status: 200, data: {success: true}});
      } catch (e) {
        console.log ('There was a problem with your query: ', e);
        return next ({status: 500, data: e});
      }
    });

  }
}
