require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');


// Create express app.
const app = express();

// Middlewear
app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

// Route handlers.
app.use('/api/workouts', workoutRoutes);


// Listen to requests
app.listen(process.env.PORT, () => console.log('Server running at http://localhost:4000/'));

