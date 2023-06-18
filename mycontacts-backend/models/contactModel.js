const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
        trim: true,
        unique: true,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);