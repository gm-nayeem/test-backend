const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: Number,
    },
    phone: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const User = model('User', userSchema);

module.exports = User;