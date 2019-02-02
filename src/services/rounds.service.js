import mongoose from 'mongoose';
import Round from '../models/round';
import uuid from 'uuid'
class RoundService {
  getRounds(){
    return Round.find({})
  }
  createRound(query) {
    return Round.create({ 
      ...query
    });
  }
}

export default new RoundService()