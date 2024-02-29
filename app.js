const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', (req, res) =>{
    res.send("Sending response to DThiya")
})


app.listen(3000, () => console.log("Server is running at 3000"))