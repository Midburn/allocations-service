import { GROUP_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllocationSchema = new Schema({
    profile: {type: String, required: true},
    bucket_id: {type: String, required: true},
    round_id: {type: String, required: true},
    user_id: {type: Number, required: true},
    date: {type: Number, required: true},
    allocator: {type: String, required: true},
    deleted: {type: Boolean, required: true},
    amount: {type: Number, required: true},
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Allocation = mongoose.model('allocation', AllocationSchema);

module.exports = Allocation;
