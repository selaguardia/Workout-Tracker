const express = require("express");
const router = express.Router();

// GET all workout
router.get("/", (req,res)=> {
    res.json({msg:'GET all workouts'})
});

// GET a single workout
router.get("/:id", (req,res)=> {
    res.json({msg:'GET single workout'})
});

// POST a new workout
router.post('/', (req,res)=> {
    res.json({msg:'POST a  new workout'})
})

// DELETE a workout
router.delete('/:id', (req,res)=> {
    res.json({msg:'Delete a workout'})
})

// UPDATE a workout
router.patch('/:id',(req,res)=> {
    res.json({msg:'UPDATE a workout'})
})

module.exports = router;
