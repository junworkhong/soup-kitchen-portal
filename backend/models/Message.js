const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // ^ good for .populate()

    name: { type: String, required: true, default: "Anonymous" },
    email: { type: String, required: false },
    body: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);