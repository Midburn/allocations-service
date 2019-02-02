import { GROUP_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BucketSchema = new Schema({
    active: Boolean,
    event_id: String,
    based_on_event_id: String,
    group_id: String,
    amount: Number,
    allocation_type: {
      type: String,
      enum: GROUP_TYPES,
    }
}, {_id: false, timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Bucket = mongoose.model('BucketSchema', BucketSchema);

module.exports = Bucket;
