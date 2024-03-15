// routes/workerRoutes.js

const express = require('express');
const router = express.Router();

const workerController = require('../controllers/workerController');


// Define routes for CRUD operations on workers
router.post('/createworker', workerController.createWorker);
router.put('/updateworker/:workerId', workerController.updateWorker)
router.get('/getallworkers', workerController.getAllWorkers)
router.delete('/deleteworker/:workerId', workerController.deleteWorker)
module.exports = router;
