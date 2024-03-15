// services/workerService.js

const Worker = require('../models/workerModel')

async function createWorker(workerData){
    try{
        const worker = new Worker(workerData)

        await worker.save()
        return worker
    }catch(error){
        throw error
    }
}

async function getWorkerById(workerId){
    try{
        const worker = await Worker.findById(workerId)

        if(!worker){
            throw Error('Worker not found!')
        }

        return worker
    }catch(error){
        throw error
    }
}

async function getAllWorkers(){
    try{
        const worker = await Worker.find({})

        if(!worker){
            throw Error('Worker not found!')
        }

        return worker
    }catch(error){
        throw error
    }
}

async function updateWorker(workerId, updatedData){
    try{
        const worker = await Worker.findByIdAndUpdate(workerId, updatedData, {new: false})

        if(!worker){
            throw Error('Worker not found!')
        }
        return worker
    }catch(error){
        throw error
    }
}


async function deleteWorker(workerId){
    try{
        const worker = await Worker.findByIdAndDelete(workerId)
        console.log(worker)
        if(!worker){
            throw Error('Worker not found!')
        }
        return {message: 'Worker deleted success'}
    }catch (error){
        throw error
    }
}

module.exports = {
    createWorker,
    updateWorker,
    deleteWorker,
    getWorkerById,
    getAllWorkers
}