const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    volunteerStatus: { type: Boolean, required: false },
    messages: [{
        // array of references to all the messages a user ever sent
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);