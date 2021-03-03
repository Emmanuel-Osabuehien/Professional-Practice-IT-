//import mongoose
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


//and cors and bodyparser
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Connect to mongoose
const Schema = mongoose.Schema

//set up 2 schema (income and expense)
var incomeSchema = new Schema({
    title: String,
    money: String
})
var expenseSchema = new Schema({
    title: String,
    money: String
})


var incomeModel = mongoose.model("income", incomeSchema)
var expenseModel = mongoose.model("expenses", expenseSchema)

mongoose.connect('mongodb+srv://admin:ppit@cluster0.iemzw.mongodb.net/mms?retryWrites=true&w=majority', { useNewUrlParser: true });

app.get('/incomes', (req, res) => {

    incomeModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/incomes/:id', (req, res) => {
    console.log(req.params.id);

    incomeModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.post('/incomes', (req, res) => {
    console.log("Your Input has been added");
    console.log(req.body.title);
    console.log(req.body.money);

    incomeModel.create({
        title: req.body.title,
        money: req.body.money
    })
})

app.get('/expenses', (req, res) => {

    expenseModel((err, data) => {
        res.json(data);
    })
})

app.get('/expenses/:id', (req, res) => {
    console.log(req.params.id);

    expenseModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.post('/expenses', (req, res) => {
    console.log("Your Input has been added");
    console.log(req.body.title);
    console.log(req.body.money);

    expenseModel.create({
        title: req.body.title,
        money: req.body.money
    })
})

//Listening on port4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})