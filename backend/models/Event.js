const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, required: false },
    location: { type: String, required: false },
    imageURL: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);