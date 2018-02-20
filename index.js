//importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const keys  = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');


//just requiring the entire file not importing any specific code from that file
require('./models-mongoose/user');   //order of these require files is important
require('./services/passport-config');

//using express create app object
const app = express();


//setting up middleware cookie session
app.use(                 //setting cookie for app
    cookieSession({
        maxAge:30*24*60*60*1000,         //cookie last for 30 days then expire
        keys:[                     //you can provide array of multiple keys and it picks random key
            keys.cookieKey
        ]
    })
);


//setting up middleware
app.use(passport.initialize());
app.use(passport.session());


//calling function from authroutes file using this express app object
authRoutes(app);

//Route handler '/'
app.get('/',(request,response)=>{
    response.send({hi:'there'});
});


//route handler to check whether cookie is set and passport is keep tracking it
app.get('/api/current_user',(request,response)=>{
    response.send(request.user);
});

//Route handler for logout user
app.get('/api/logout',(request,response)=>{
    request.logout();    //passport destroys the user object stored currently in cookie
    response.send(request.user);
});


//connecting to mongodb cloud mlab using mongoose driver library
mongoose.connect(keys.mongoDbURI);

//dynamic port binding
const port = process.env.PORT || 5000;
//changing port based on production(remote)or development(local) envirnomnet

//Listening to the client
app.listen(port);


