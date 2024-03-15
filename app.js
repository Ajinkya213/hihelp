require('dotenv').config();
const express = require('express');
const database = require('./config/db')
const workerRoutes = require('./routes/workerRoute');

const app = express();

app.use(express.json()); 

app.get('/', (req, res) =>{
    res.send('Connected to Dthiya')
})

app.use('/api', workerRoutes)

database.connectToDatabase()
    .then(()=>{
         // Start your Express server once the database connection is established
         const PORT = process.env.PORT || 3000;
         app.listen(PORT, () => {
             console.log(`Server is running on port ${PORT}`);
         });
     })
     .catch(error => {
         console.error('Error starting server:', error);
     })
