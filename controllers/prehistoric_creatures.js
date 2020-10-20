const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res)=>{
    let creatures = fs.readFileSync('./prehistoric_creatures.json')
    let creatureData = JSON.parse(creatures)
    res.render('prehistoric_creatures/index', {creatures: creatureData})
})

router.get('/new', (req, res)=>{
    res.render('prehistoric_creatures/new')
})

router.get('/:idx', (req, res)=>{
    let creatures = fs.readFileSync('./prehistoric_creatures.json')
    let creatureData = JSON.parse(creatures)
    let creatureIndex = req.params.idx
    res.render('prehistoric_creatures/show', {creature: creatureData[creatureIndex], creatureId: creatureIndex})
})

router.post('/', (req, res)=>{
    let creatures = fs.readFileSync('./prehistoric_creatures.json')
    let creatureData = JSON.parse(creatures)
    creatureData.push(req.body) //push new dino into array
    //save the new dinoData array to the dinosaurs.json file
    // JSON.stringify does the opposite of JSON.parse
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(creatureData))
    //redirect to the GET /dinosaurs route(index)
    res.redirect('/prehistoric_creatures')
})

module.exports = router