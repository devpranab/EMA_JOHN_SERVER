const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = 3003;

app.get('/', (req, res) => {
    res.send('Ema-John Server is Running')
});

// MongoDB start
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@database.1n8y8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const productsCollection = client.db(`${process.env.DB_NAME}`).collection("products");
    console.log(`MongoDB connected!`);
    //POST
    app.post('/addProduct', (req, res) => {
        const product = req.body;
        productsCollection.insertOne(product)
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

});
// MongoDB end

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});