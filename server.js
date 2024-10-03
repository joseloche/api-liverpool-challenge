const express = require('express')
const axios = require('axios');
const routes = require('./routes')

// Crear una instancia de Express
const app = express()

// Configuración del puerto
app.set('port', process.env.PORT || 9000);

app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api/liverpool-challenge', routes)

app.listen(app.get('port'), () => {
    console.log('server runing on port', app.get('port'))
})