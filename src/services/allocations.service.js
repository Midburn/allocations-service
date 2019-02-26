import Allocation from '../models/allocation';

class AllocationService {
  getAllocations() {
    return Allocation.find({});
  }

  createAllocation(query) {
    return Allocation.create({
      date: Date.now(),
      ...query,
    });
  }

  updateAllocation(data) {
    const { _id } = data
    return Allocation.findByIdAndUpdate(_id, data);
  }

  getAllocationsByBucketId(bucket_id) {
    if (!bucket_id)
      throw new Error('your query is missing a required parameter');

    return Allocation.find({
      bucket_id,
    });
  }
}

export default new AllocationService();
