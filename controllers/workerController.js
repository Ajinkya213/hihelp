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

async function updateWorker(req, res){
    try{ 
        const {workerId} = req.params;
        const updatedData = req.body;
        console.log(updatedData)
        const worker = await workerService.updateWorker(workerId, updatedData)

        res.status(201).json({message: 'Worker updated successfully', worker})
    }catch (error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

async function getAllWorkers(req, res){
    try{
        const workers = await workerService.getAllWorkers()
        res.status(201).json({message: 'List of all workers', workers})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

async function deleteWorker(req,res){
    try{
        const {workerId} = req.params;
        const worker = await workerService.deleteWorker(workerId)
        res.status(201).json({message: `Worker deleted successfully`, worker})
    }catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}


module.exports = {
    createWorker,
    updateWorker,
    getAllWorkers,
    deleteWorker
};
