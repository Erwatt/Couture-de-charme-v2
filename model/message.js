const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    mail: {type: String, required: true},
    spam: {type: String, required: true},
    message: {type: String, required: true}
});

module.exports = mongoose.model('message', messageSchema);