const { default: mongoose } = require('mongoose');
const Workout = require('../models/workout');

//get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

//get workouts
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO RECORD FOUND' })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: 'NO RECORD FOUND' })
    }
    return res.status(200).json(workout);
}

//post workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//update workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Record to update...' })
    }
    const updateworkout = await Workout.findByIdAndUpdate(id, {
        ...req.body
    })
    if (!updateworkout) {
        res.status(404).json({ error: 'No Record to update,,,' })
    }
    res.status(200).json(updateworkout);
}

//delete workout 
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Record to Delete' })
    }
    console.log(id);
    const removeworkout = await Workout.findOneAndDelete({_id: id});
    if (!removeworkout) {
        return res.status(404).json({ error: 'No Record to Delete' })
    }
    res.status(200).json({ success: removeworkout })
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}