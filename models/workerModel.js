// models/workerModel.js

const mongoose = require('mongoose')


const workerSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true
    },
    dob: {
        type: Date,
        required: true
    },
    skillset:{
        type: [String],
        required: true
    },
    isAvailable: {
        type: Boolean,
        required : true
    },
    location: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Worker', workerSchema)