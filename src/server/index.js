var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const bodyParser = require('express')

const dotenv = require('dotenv')
dotenv.config()

var aylien = require('aylien_textapi')

var textapi = new aylien({
    application_key: process.env.API_KEY  
})

//console.log(`Your API KEY is ${procss.env.API_KEY}`)

//const { request } = require('http')


const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
//const app = require('./app')
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


let projectData = {}
app.post('/api', function(request, response){
    console.log(request.body)
    textapi.sentiment({url:req.body.url, } ,(error,res) => {
        if(error === null){
            projectData = {
                text: res.text
            }
            response.send(projectData)
        }else{
            response.send(error)
        }
    })
})

/*app.post('/api' , async (req, res, next) =>{
    try{
        textapi.sentiment({
            'text' : req.body.theText
        }, function (error,response){
            if(error === null){
                res.send(response)
            }
        })
    }catch(error){
        return next(error)
    }
})

module.exports =app*/