const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const api = require('./routes/api');

app.get('/', (req,res)=>{
    res.send("Hello from server");
})

app.use('/api', api);

app.listen(PORT, ()=>{
    console.log("Server running on localhost: http://localhost:"+PORT);
})
