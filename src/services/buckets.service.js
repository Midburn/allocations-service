import Bucket from '../models/bucket'

class BucketService {
  getBuckets(){
    return Bucket.find({})
  }
  createBucket(query) {
    return Bucket.create(query);
  }

   sumByAllocation(event_id, based_on_event_id, allocation_type) {

     if (!event_id || !based_on_event_id || !allocation_type) throw new Error('your query is missing a required parameter')

    return Bucket.find({
      event_id,
      based_on_event_id,
      allocation_type
    })
    
  }
}

export default new BucketService()
