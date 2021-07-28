// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});app.get('/api/:date', (req,res)=>{
  var input = req.params.date

  if (input.includes('-'|| ' ' || '/')){
  
  responseObject1 = new Date(input).getTime();
  responseObject = new Date(input).toUTCString();
 

  } else {
        input = parseInt(input)

     responseObject1 = new Date(input).getTime();
     responseObject = new Date(input).toUTCString();
    

     if(responseObject1 === 0 ){
       res.json({"unix": responseObject1, "utc": responseObject })
      
     }
      if(responseObject === 0 ){
       res.json({"unix": responseObject1, "utc": responseObject })
      
     }

  } 
  if (responseObject == "Invalid Date"  ){
    res.json({ error : "Invalid Date" })
  }

  res.json({"unix": responseObject1, "utc": responseObject })
})


app.get('/api', (req,res) => {
  responseObject = new Date().getTime();
  responseObject1 = new Date().toUTCString();

  res.json({"unix": responseObject, "utc": responseObject1 })
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
