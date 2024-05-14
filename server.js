const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Database variable
let db = [];

// Middleware
app.use(bodyParser.json());

// POST request handler
app.post('/', (req, res) => {
    const newJoke = req.body;
    newJoke.id = db.length + 1;
    db.push(newJoke);
    res.json(db);
});

// GET request handler
app.get('/', (req, res) => {
    res.json(db);
});

// PATCH request handler
app.patch('/joke/:id', (req, res) => {
    const id = req.params.id;
    const updatedJoke = req.body;
    db = db.map(joke => {
        if (joke.id === parseInt(id)) {
            return { ...joke, ...updatedJoke };
        } else {
            return joke;
        }
    });
    res.json(db.find(joke => joke.id === parseInt(id)));
});

// DELETE request handler
app.delete('/joke/:id', (req, res) => {
    const id = req.params.id;
    const deletedJoke = db.find(joke => joke.id === parseInt(id));
    db = db.filter(joke => joke.id !== parseInt(id));
    res.json(deletedJoke);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
