import mongoose from 'mongoose'
import Bucket from '../models/bucket'
import uuid from 'uuid'

class BucketService {
  getBuckets(query){
    return Bucket.find({})
  }
  createBucket(query) {
    console.log('query', query)
    return Bucket.create({ 
      ...query
    });
  }
}

export default new BucketService()
