/*
http://api.weatherstack.com/current
? access_key = YOUR_ACCESS_KEY
& query = New York
*/
require('dotenv').config()
const express = require('express');
const app = express();
const axios = require('axios')

app.get('', (req, res) =>{
    res.send('Weather App')
})
app.get('/city/:city',(req, response)=>{
    let city = req.params.city
    axios.get('http://api.weatherstack.com/current?access_key='+process.env.WEATHER_API_TOKEN+'&query='+city)
    .then(res => {
        response.send(res.data)
    })
    .catch(err => {
        console.error(err); 
    })
    
})

app.get('/about',(req,res) =>{
    res.send('Developed by Carlos Marquez')
})


app.listen(process.env.PORT, () =>{
    console.log('Application running on port ' + process.env.PORT)
})
