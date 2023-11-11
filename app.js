const express = require('express')
require('dotenv').config();
const api = require('./routes/api')
const cors = require('cors')


const app = express()
app.use(cors())

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
    res.send('server is started')
})

app.use('/api', api)


app.listen(port, ()=>console.log('listening on port' + port))