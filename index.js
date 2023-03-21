const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const path = require('path')
require('./routes/nodeMailer')
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended : true}))
// require('./routes/feedbackRoute')(app)

app.use(express.static(__dirname + '/views/'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use(express.urlencoded( {extended : true}))


app.get('/', (req, res) => res.render('index.ejs') )
app.get('/about', (req, res) => res.render('about.ejs') )
app.get('/contact', (req, res) => res.render('contact.ejs' , {message : 'hello'}) )
app.get('/works', (req, res) => res.render('works.ejs') )
app.get('/work', (req, res) => res.render('work.ejs') )
app.get('/sample', (req, res) => res.render('sample.ejs') )
app.get('/components', (req, res) => res.render('components.ejs') )
app.get('/resume', (req, res) => res.render('resume.ejs') )
require('./routes/feedbackRoute')(app)





app.listen(port);