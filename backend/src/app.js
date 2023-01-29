const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
const hbs = require('hbs');
const path = require('path');
const dotenv = require('dotenv').config();

// const static_path = path.join(__dirname, '../public');
const views_path = path.join(__dirname, '../templates/views');
const particials_path = path.join(__dirname, '../templates/partials');

// app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(particials_path);

const model = require('../src/models/register');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/home', (req, res) => {
    res.render('index');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', async (req, res) => {
    try {
        const body = req.body;
        const {name, email, password} = body;
        const user = await model.findOne({email: email});
        if (user) return res.status(400).send({status: false, message: 'email is already in use, please provide a unique email'});
        const userCreated = await model.create(body)
        res.status(201).send({status: true, message: `Thank you ${name} for registring on our webiste`, data: {name, email}});
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', async (req, res) => {
    try {
        const body = req.body;
        const {email, password} = body;
        const user = await model.findOne({email: email, password: password});
        if (!user) return res.status(400).send({status: false, message: 'email or password is invalid'});
        res.status(200).send({status: true, message: `hello ${user.name} !  you are logged in`});
    } catch (error) {
        res.status(500).send({status: false, message: error.message})           
    }
})


const port = process.env.PORT || 3000;
const connectionString = process.env.DB_STRING;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => console.log('mongoDB is conncted'))
    .catch((error) => console.log(error.message));



app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});