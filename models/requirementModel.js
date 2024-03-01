const mongoose = require('mongoose')

const requirementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    skillset: {
        type: [String]
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    workerRequired: {
        type: Number,
        required: true
    },
    assignedWorkers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Requirement', requirementSchema)