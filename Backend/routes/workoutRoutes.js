const express = require('express');
const router = express.Router();

const {createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout} 
= require('../controllers/workoutController')

router.get('/', getAllWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)
router.patch('/:id', updateWorkout)
router.delete('/:id', deleteWorkout)

module.exports = router;