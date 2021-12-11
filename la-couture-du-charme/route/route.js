const express = require('express');
const router = express.Router();

const {sendMessage, getMessages, spaGift} = require('../controllers/controller');

router.post('/SendMessage', sendMessage);
router.get('/GetMessages', getMessages);
router.post('/create-payment-intent');
router.post('/SpaGift', spaGift);

module.exports = router;