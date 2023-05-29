require('dotenv').config();
const express = require('express');

// Create express app.
const app = express();

// Middlewear
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

// Route handlers.
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to NASHAT!' });
});



// Listen to requests
app.listen(process.env.PORT, () => console.log('Server running at http://localhost:4000/'));

