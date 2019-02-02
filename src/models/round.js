import { ALLOCATION_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
    start_date: {
      type: Number,
      required: true
    },
    end_date: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    event_id: {
      type: String,
      required: true
    },
    based_on_event_id: {
      type: String,
      required: true
    },
    allocation_type: {
      type: String,
      required: true,
      enum: ALLOCATION_TYPES,
    }
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Round = mongoose.model('round', RoundSchema);

module.exports = Round;
