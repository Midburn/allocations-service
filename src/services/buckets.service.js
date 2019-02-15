import Bucket from '../models/bucket';
import Round from '../models/round';
import Allocation from '../models/allocation'
class BucketService {
  // --------------- GET ----------------//
  getBuckets() {
    return Bucket.find({});
  }

  getBucketById(bucket_id) {
    return Bucket.find({ _id: bucket_id })
  }

  getBucketByAllocationTypeAndEventId(query){
    const { event_id, based_on_event_id, allocation_type, group_type } = query
    if (!event_id || !based_on_event_id || !allocation_type || !group_type)
      throw new Error('your query is missing a required parameter');
    return Bucket.find({
      event_id,
      based_on_event_id,
      allocation_type,
      group_type
    })
  }

  async sumByAllocation(event_id, based_on_event_id, allocation_type) {
    if (!event_id || !based_on_event_id || !allocation_type)
      throw new Error('your query is missing a required parameter');
    const res = {}
    const buckets = await Bucket.find({
      event_id,
      based_on_event_id,
      allocation_type,
    });

    for (const bucket of buckets) {
      const { _id, group_id } = bucket;
      const allocations = await Allocation.find({ bucket_id: _id })
      console.log('_id', _id);
      res[group_id] = {
        ...bucket.toJSON(),
        allocations
      }
    }
    return res;
  }
  // --------------- CREATE ----------------//
  createBucket(data) {
    const { event_id, based_on_event_id, allocation_type } = data;
    const query = { event_id, based_on_event_id, allocation_type };
    return Bucket.findOneAndUpdate(query, data, { upsert: true });
  }

}

export default new BucketService();
