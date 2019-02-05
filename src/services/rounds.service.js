import mongoose from 'mongoose';
import Round from '../models/round';
import uuid from 'uuid'
class RoundService {
  getRounds() {
    return Round.find({})
  }
  
  createRound(query) {
    return Round.create({
      ...query
    });
  }

  byEventId(event_id, based_on_event_id) {
    return Round.find({
      event_id,
      based_on_event_id
    })
    .sort({'start_date': 1})
  }
  byAllocation(event_id, based_on_event_id, allocation_type) {
    return Round.find({
      event_id,
      based_on_event_id,
      allocation_type
    })
    .sort({'start_date': 1})
  }
}

export default new RoundService()