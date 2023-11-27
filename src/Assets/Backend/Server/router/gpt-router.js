const express = require('express');
const chat = require('../Controller/chats_controller');
const user = require('../Controller/user_controller');

const router = express.Router()

router.route('/chat').post(chat);

router.route('/user').get(user);

module.exports = router;