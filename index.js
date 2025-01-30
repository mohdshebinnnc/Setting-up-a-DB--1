const express = require('express');
const { default: mongoose } = require('mongoose');
const { resolve } = require('path');
require('dotenv').config()

const app = express();
const PORT = 3010;

let connection=mongoose.connect(process.env.mongoURL)

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(PORT, async() => {
  try{
    await connection;
    console.log("Connected to database  ")
}
catch(error){
    console.log(error)
}
console.log(`Server is running on port ${PORT}`)
});
