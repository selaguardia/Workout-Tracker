const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(workouts);
}

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error:"ID not valid"})
  }
  const workout = await Workout.findById(id);
  if(!workout) {
    return res.status(404).json({error:"That workout doesn't exist"})
  }
  res.status(200).json(workout);
}

// create new workout
const createWorkout = async (req,res) => {
  const {title, weight, reps} = req.body;

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!weight) {
    emptyFields.push('weight')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }

  try {
    const workout = await Workout.create({title, weight, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error:"ID not valid"})
  }
  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(404).json({error:"That workout doesn't exist"})
  }
  res.status(200).json(workout)

}

// update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error:"ID not valid"})
  }

  const workout = await Workout.findOneAndUpdate({_id:id}, {
    ...req.body
  })
  if(!workout) {
    return res.status(404).json({error:"That workout doesn't exist"})
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}