import mongoose from 'mongoose';
import Allocation from '../models/allocation';
import uuid from 'uuid';

class AllocationService {
  getAllocations(query){
    return Allocation.find({})
  }
  createAllocation(query) {
    console.log('query', query)
    return Allocation.create({ 
      date: Date.now(),
      ...query
    });
  }
}

export default new AllocationService()