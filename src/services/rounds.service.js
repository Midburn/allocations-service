import Round from '../models/round';

class RoundService {
  getRounds() {
    return Round.find({})
  }
  
  createRound(query) {
    return Round.create(query);
  }

  byEventId(event_id, based_on_event_id) {

    if(!event_id || !based_on_event_id) throw new Error('your query is missing a required parameter')

    return Round.find({
      event_id,
      based_on_event_id
    })
    .sort({'start_date': 1})
  }
  byAllocation(event_id, based_on_event_id, allocation_type) {

    if(!event_id || !based_on_event_id || !allocation_type) throw new Error('your query is missing a required parameter')

    return Round.find({
      event_id,
      based_on_event_id,
      allocation_type
    })
    .sort({'start_date': 1})
  }
}

export default new RoundService()