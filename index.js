//importing dependencies
const express = require('express');

//using express create app object
const app = express();

//Route handler '/'
app.get('/',(request,response)=>{
    response.send({hi:'there'});
});



//dynamic port binding
const port = process.env.PORT || 3000;
//changing port based on production(remote)or development(local) envirnomnet

//Listening to the client
app.listen(port);


