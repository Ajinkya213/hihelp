// config/db.js

const mongoose = require('mongoose');

// Connection URI
const uri = process.env.MONGO_URI;

// Function to establish MongoDB connection
async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.info('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
    }
}

module.exports = {
    connectToDatabase
} 
