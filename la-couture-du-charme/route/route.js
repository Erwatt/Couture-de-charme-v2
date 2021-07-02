const express = require('express');
const router = express.Router();

const {sendMessage, getMessages} = require('../controllers/controller');

router.post('/SendMessage', sendMessage);
router.get('/GetMessages', getMessages);

module.exports = router;