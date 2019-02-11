import Bucket from '../models/bucket';

class BucketService {
  getBuckets () {
    return Bucket.find ({});
  }
  createBucket (data) {
    const {event_id, based_on_event_id, allocation_type} = data;
    const query = {event_id, based_on_event_id, allocation_type};
    return Bucket.findOneAndUpdate (query, data, {upsert: true});
  }

  sumByAllocation (event_id, based_on_event_id, allocation_type) {
    if (!event_id || !based_on_event_id || !allocation_type)
      throw new Error ('your query is missing a required parameter');

    return Bucket.find ({
      event_id,
      based_on_event_id,
      allocation_type,
    });
  }
}

export default new BucketService ();
