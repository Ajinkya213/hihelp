// controllers/workerController.js

const workerService = require('../services/workerService');

async function createWorker(req, res) {
    try {
        // Extract worker data from the request body
        const { username, dob, skillset, isAvailable, location } = req.body;

        // Call the service function to create the worker
        const worker = await workerService.createWorker({
            username,
            dob,
            skillset,
            isAvailable,
            location
        });

        // Send a success response with the created worker
        res.status(201).json({ message: 'Worker created successfully', worker });
    } catch (error) {
        // Handle errors and send an error response
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    createWorker
};
