require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// Create express app.
const app = express();

// Middlewear
app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

// Route handlers.
app.use('https://nashat.onrender.com/api/workouts', workoutRoutes);
app.use('https://nashat.onrender.com/api/user', userRoutes);

// Connect to database.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    // Listen to requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to database & listening on port 4000')
    });  
})
.catch((err) => console.log(err));




