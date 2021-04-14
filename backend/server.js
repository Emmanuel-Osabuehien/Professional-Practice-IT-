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
    money: Number,
    date: String,
    reccur: String,
    annual: String
})
var expenseSchema = new Schema({
    title: String,
    money: Number,
    date: String,
    reccur: String,
    annual: String
})


var incomeModel = mongoose.model("incomes", incomeSchema)
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

app.put('/incomes/:id', (req, res) => {
    console.log("Updated: " + req.params.id);
    console.log(req.body);

    incomeModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })

})

app.post('/incomes', (req, res) => {
    console.log("Your Input has been added");
    console.log(req.body.title);
    console.log(req.body.money);
    console.log(req.body.date);
    console.log(req.body.reccur);
    console.log(req.body.annual);

    incomeModel.create({
        title: req.body.title,
        money: req.body.money,
        date: req.body.date,
        reccur: req.body.reccur,
        annual: req.body.annual
    })
})

app.delete('/incomes/:id', (req, res) => {
    console.log("Income: " + req.params.id + " was deleted");

    incomeModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.get('/expenses', (req, res) => {

    expenseModel.find((err, data) => {
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
    console.log(req.body.date);
    console.log(req.body.reccur);
    console.log(req.body.annual);

    expenseModel.create({
        title: req.body.title,
        money: req.body.money,
        date: req.body.date,
        reccur: req.body.reccur,
        annual: req.body.annual
    })
})


app.put('/expenses/:id', (req, res) => {
    console.log("Updated: " + req.params.id);
    console.log(req.body);

    expenseModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })

})

app.delete('/expenses/:id', (req, res) => {
    console.log("Expense: " + req.params.id + " was deleted");
    console.log(err.message);

    expenseModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
        })
})

//Listening on port4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})