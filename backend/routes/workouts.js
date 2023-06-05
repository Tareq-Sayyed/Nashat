const express = require('express');
const { getWorkouts, createWorkout, 
    getWorkout, deleteWorkout, 
    updateWorkout } = require('../controllers/workoutController');
const requireAuth = require('../middlewear/requireAuth');



const router = express.Router();  

router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);
// GET a single / specific workout
router.get('/:id', getWorkout);
// POST a new workout
router.post('/', createWorkout);
// DELETE a workout
router.delete('/:id', deleteWorkout);
// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;