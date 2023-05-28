const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = 3003;

app.get('/', (req, res) => {
    res.send('Ema-John Server is Running')
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});