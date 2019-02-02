import { GROUP_TYPES }  from '../consts' 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllocationSchema = new Schema({
    profile: String,
    bucket_id: String,
    round_id: String,
    date: Date,
    allocator: String,
    deleted: Boolean,
    amount: Number
}, {_id: false, timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const Allocation = mongoose.model('AllocationSchema', AllocationSchema);

module.exports = Allocation;
