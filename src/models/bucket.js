import { GROUP_TYPES, ALLOCATION_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BucketSchema = new Schema({
    active: Boolean,
    event_id: String,
    based_on_event_id: String,
    group_id: String,
    group_name: String,
    amount: Number,
    group_type: {
      type: String,
      enum: GROUP_TYPES,
    },
    allocation_type: {
      type: String,
      enum: ALLOCATION_TYPES,
    }
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Bucket = mongoose.model('bucket', BucketSchema);

module.exports = Bucket;
