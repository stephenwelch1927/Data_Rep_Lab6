//Set up constants and port to run on
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//Listener for http get method root points
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res)=>{
    res.send('Hello '+req.params.name);
})
//Get request that will post up JSON Array of objects for movies
app.get('/api/movies', (req, res)=>{
const movies = [
    {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
    "Title": "Captain America: Civil War",
    "Year": "2016",
    "imdbID": "tt3498820",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
    ];
    
    //Res is the HTTP response that will show the data contained in movies
    res.json({
        myMovies:movies,
        
    })
})
//App get to retrive html page index.html when you type localHost:400/test
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})
//App get to retrive html page form submit displaying names on submit button fired
app.get('/name', (req, res)=>{
    res.send("Hello "+req.query.firstname + " " + req.query.lastname);  
})
//App set up to post form date in index.html to name section
app.post('/name', (req, res)=>{
    res.send('HELLO ' + req.body.firstname + " " + req.body.lastname);
})
//Set up to configure for server to listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})