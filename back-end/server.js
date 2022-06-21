import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cards from './dbCards.js';
import cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8081;
const connection_url = process.env.DB_URL;

// Middlewares

app.use(express.json());
app.use(cors())

// DB config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// API Endpoints

app.get('/', (req, res) => {
    res.status(200).send('Hello world!')
})

app.post('/tinder/card', (req, res) => {

    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {

    cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//Listener

app.listen(port, () => console.log(`listen on localhost:${port}`))