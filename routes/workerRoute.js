// routes/workerRoutes.js

const express = require('express');
const router = express.Router();

const workerController = require('../controllers/workerController');


// Define routes for creating and retrieving workers
router.post('/createworker', workerController.createWorker);

module.exports = router;
