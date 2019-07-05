const express = require('express');
const app = express();

app.use(express.json);

const users = []

app.get('/users', (req, res) => {
    res.json(users);
});

// app.get('/users', (req, res) =>{
    
// });

app.post('/users', (req, res) => {
    const user = { name:req.body.name, password: req.body.password}
    user.push(user);
    res.status(201).send();
});

app.listen(users);