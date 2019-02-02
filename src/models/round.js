import { ALLOCATION_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
    start_date: Date,
    end_date: Date,
    active: Boolean,
    event_id: String,
    based_on_event_id: String,
    allocation_type: {
    type: String,
    enum: ALLOCATION_TYPES,
    
  }
}, {_id: false, timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Round = mongoose.model('RoundSchema', RoundSchema);

module.exports = Round;
