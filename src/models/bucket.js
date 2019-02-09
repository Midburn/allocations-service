import { GROUP_TYPES, ALLOCATION_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BucketSchema = new Schema({
    active: {type: Boolean, required: true},
    event_id: {type: String, required: true},
    based_on_event_id: {type: String, required: true},
    group_id: {type: String, required: true},
    group_name: {type: String, required: true},
    amount: {type: Number, required: true},
    group_type: {
      type: String,
      required: true,
      enum: GROUP_TYPES,
    },
    allocation_type: {
      type: String,
      required: true,
      enum: ALLOCATION_TYPES,
    }
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Bucket = mongoose.model('bucket', BucketSchema);

module.exports = Bucket;
