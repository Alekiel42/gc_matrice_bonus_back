const express = require('express');
const router = express.Router();
const resultController = require('./controller/resultController');
const mainController = require('./controller/mainController')

router.route('/answer')
    .post(resultController.compareResult);

router.use(mainController.error404);

module.exports = router;
