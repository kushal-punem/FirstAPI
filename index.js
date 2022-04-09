const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const user = {
    name: 'John',
    age: 30
}


app.get('/user', (req, res) => res.send(user));

app.get('/hello', (req, res) => res.send('Hello World on hello route'));

app.listen(port, () => console.log(`Server listening on ${port}!`));

