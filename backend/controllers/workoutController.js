const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');


// GET all workouts
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json({ workouts });
};

// GET a single / specific workout
const getWorkout = async(req, res) => {
    const { id } = req.params;
    const workout = await Workout.findById( id );

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No workout with id: ${id}`);
    }

    if(!workout){
        return res.status(404).json({ error: "Workout does not exist." });
    }
    res.status(200).json({ workout });
}; 

// POST { Create } a new workout
const createWorkout = async(req, res) => {
    const { title, reps, sets, weight } = req.body
    // Adding the document to the database
    try{
        const workout = await Workout.create({ title, reps, sets, weight })
        res.status(200).json({ workout })
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

// DELETE a workout
const deleteWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No workout with id: ${id}`);
    }
    const deleted = await Workout.findByIdAndDelete( id );
    if(!deleted){
        return res.status(404).json({ error: "Workout does not exist." });
    }
    res.status(200).json({ message: "Workout deleted successfully." });
};

// UPDATE a workout
const updateWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No workout with id: ${id}`);
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        title: req.body.title,
        reps: req.body.reps,
        sets: req.body.sets,
        weight: req.body.weight
    });

    if(!workout){
        return res.status(404).json({ error: "Workout does not exist." });
    }
    res.status(200).json({ message: "Workout updated successfully." });
};


module.exports = { getWorkouts, createWorkout, getWorkout, deleteWorkout, updateWorkout };