import Allocation from '../models/allocation';
import Round from '../models/round'
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

  async getAllocationsByUsers(users, round_id) {
      let results = []
      for (let user of users) {
        results.push({ 
          user_id: user.user_id,
          allocations: await Allocation.find({ user_id: user.user_id, round_id })
        })
      }
      return results
  }
}

export default new AllocationService();
