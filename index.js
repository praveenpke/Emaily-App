//importing dependencies
const express = require('express');

//using express create app object
const app = express();

//Route handler '/'
app.get('/',(request,response)=>{
    response.send({hi:'there'});
});



//Listening to the client
app.listen(5000);


