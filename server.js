const express = require('express');
const app = express();
const port = 3458;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('All users here!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});