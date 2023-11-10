const express = require('express')
require('dotenv').config();
const api = require('./routes/api')

const app = express()

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
    res.send('server is started')
})

app.use('/api', api)


app.listen(port, ()=>console.log('listening on port' + port))