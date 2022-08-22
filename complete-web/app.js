//parsing form data
const fs = require('fs')


//creating unique ids with uuid
//const uuid = require('uuid')

//returning diff html files


const path = require('path')


//  input express in a variable
const { urlencoded } = require('express')
const express = require('express')


//put it in another variable as a function
const app = express()

//Adding EJS template engine
// place to view the engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')

//returning diff html files
app.use(express.static('public'))

//parsing form data
app.use(express.urlencoded ({ extended: false}))



// get the function u want to execute & add it to the port u want to listen




app.get('/', function(req, res){
    res.render('index')
    })
    

app.get('/restaurant', function(req, res){
    //outputting repeated contents
    const filePath = path.join(__dirname, 'data', 'restaurant.json' )
    const fileData =fs.readFileSync(filePath)

    const storedRestaurant = JSON.parse(fileData)
    res.render('restaurant', { numberOfRestaurants:  storedRestaurant.length, restaurants: storedRestaurant})
    })
// adding detail page
    app.get('/restaurant/:id', function(req, res){
        const restaurantId = req.params.id
        res.render('restaurant-detail', {rid: restaurantId})
    })

 app.get('/recommend', function(req, res){
        res.render('recommend')
        })

        //parsing form data
        app.post('/recommend', function(req, res){
            const restaurant = req.body
            //managing data with unique id
            //restaurant.id = uuid.v4()
            
            const fileData =fs.readFileSync(filePath)
            
            const filePath = path.join(__dirname, 'data', 'restaurant.json' )
       

            const storedRestaurant = JSON.parse(fileData)
            storedRestaurant.push(restaurant)
            fs.writeFileSync(filePath, JSON.stringify(storedRestaurant))
            res.redirect('/confirm')
        })

        app.get('/confirm', function(req, res){
            res.render('confirm')
            })
        
            app.get('/about', function(req, res){
            res.render('about')
            })



app.listen(3000)