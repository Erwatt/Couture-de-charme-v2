const mongoose = require('mongoose');

const spaGiftSchema = mongoose.Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    mailSender: {type: String, required: true},
    mailReceiver: {type: String, required: true},
    telSender: {type: String, required: true},
    telReceiver: {type: String, required: true},
    message: {type: String},
    number: {type: Number, required: true},
    creneau: {type: String, required: true},
    sending: {type: String, required: true}
});

module.exports = mongoose.model('spaGift', spaGiftSchema);