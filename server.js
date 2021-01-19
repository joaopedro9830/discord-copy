const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// Open the server with <nodemon discord>

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.listen(3000, () => {
    console.log('Server on in: http://localhost:3000');
})