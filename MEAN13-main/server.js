const express = require('express')
const path = require('path')

const api = require('./server/routes/api')
const port = 3000
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', api);

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(port, function(){
    console.log("Server running at:"+port)
})