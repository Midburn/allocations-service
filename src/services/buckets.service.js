import mongoose from 'mongoose'
import Bucket from '../models/bucket'
import uuid from 'uuid'

class BucketService {
  getBuckets(query){
    return Bucket.find({})
  }
  createBucket(query) {
    return Bucket.create({ 
      ...query
    });
  }

   sumByAllocation(event_id, based_on_event_id, allocation_type) {
    return Bucket.find({
      event_id,
      based_on_event_id,
      allocation_type
    })
    
  }
}

export default new BucketService()
