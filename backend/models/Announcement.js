const mongoose = require('mongoose');

const announceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
}, { timestamps: true }); // adds createdAt and updatedAt automatically

module.exports = mongoose.model('Announcement', announceSchema);