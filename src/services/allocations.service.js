import Allocation from '../models/allocation';

class AllocationService {

  getAllocations(){
    return Allocation.find({})
  }

  createAllocation(query) {
    return Allocation.create({ 
      date: Date.now(),
      ...query
    });
  }
}

export default new AllocationService()