const express = require('express')
const app = express()

app.set('view engine', 'ejs')
const ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)
const fs = require('fs')
//body-parser middleware-->makes req.body work
app.use(express.urlencoded({extended: false}))

//controller for dinosaurs.js
const dinosaurs = require('./controllers/dinosaurs')
app.use('/dinosaurs', dinosaurs)
//dino index route
// app.get('/dinosaurs', (req, res)=>{
//     //take the text from dinosaurs.json and store it in a variable
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs) //convert array into string

//     //handle query string if there is one
//     //console.log(req.query.nameFilter)
//     let nameFilter = req.query.nameFilter
//     if(nameFilter){ //reassign dinoData to only be an arry of dinos whos name matches the query string name and make it ignore case
//         dinoData = dinoData.filter((dino)=>{
//             return dino.name.toLowerCase() === nameFilter.toLowerCase()
//         })
//     }
//     res.render('index', {dinosaurs: dinoData})
// })

//Dino New route
// app.get('/dinosaurs/new', (req, res)=>{
//     res.render('dinosaurs/new.ejs')
// })

//DINO SHOW ROUTE
// app.get('/dinosaurs/:idx', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     //get array index from url parameteter
//     let dinoIndex = req.params.idx
//     res.render('show', {dino: dinoData[dinoIndex], dinoId: dinoIndex})
// })

//DINO POST route
// app.post('/dinosaurs', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     dinoData.push(req.body) //push new dino into array
//     //save the new dinoData array to the dinosaurs.json file
//     // JSON.stringify does the opposite of JSON.parse
//     fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
//     //redirect to the GET /dinosaurs route(index)
//     res.redirect('/dinosaurs')
// })

//controllers for prehistoric_creatures.js
const phC = require('./controllers/prehistoric_creatures')
app.use('/prehistoric_creatures', phC)
//prehistoric_creatures index route
// app.get('/prehistoric_creatures', (req, res)=>{
//     let creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let creatureData = JSON.parse(creatures)
//     res.render('prehistoric_creatures/index', {creatures: creatureData})
// })

//prehistoric_creatures new route
// app.get('/prehistoric_creatures/new', (req, res)=>{
//     res.render('prehistoric_creatures/new')
// })

//prehistoric_creatures show route
// app.get('/prehistoric_creatures/:idx', (req, res)=>{
//     let creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let creatureData = JSON.parse(creatures)
//     let creatureIndex = req.params.idx
//     res.render('prehistoric_creatures/show', {creature: creatureData[creatureIndex], creatureId: creatureIndex})
// })

//prehistoric_creatures post route
// app.post('/prehistoric_creatures', (req, res)=>{
//     let creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let creatureData = JSON.parse(creatures)
//     creatureData.push(req.body) //push new dino into array
//     //save the new dinoData array to the dinosaurs.json file
//     // JSON.stringify does the opposite of JSON.parse
//     fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(creatureData))
//     //redirect to the GET /dinosaurs route(index)
//     res.redirect('/prehistoric_creatures')
// })

app.listen(8005, ()=>{
    console.log('you are listening to port 8005')
})