import Bucket from '../models/bucket';
import Round from '../models/round';
import Allocation from '../models/allocation'
class BucketService {
  getBuckets() {
    return Bucket.find({});
  }
  createBucket(data) {
    const { event_id, based_on_event_id, allocation_type } = data;
    const query = { event_id, based_on_event_id, allocation_type };
    return Bucket.findOneAndUpdate(query, data, { upsert: true });
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
}

export default new BucketService();
