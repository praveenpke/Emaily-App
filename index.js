//importing dependencies
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//using express create app object
const app = express();

//Route handler '/'
app.get('/',(request,response)=>{
    response.send({hi:'there'});
});



//Auth step-1: creating new instance of google strategy using passport
passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback'  //setup this callback url in console.developers.google
    },(accessToken,refreshToken,profile,done)=>{
        console.log("Code from Google: ",accessToken);
        console.log("Refresh Token: ",refreshToken);
        console.log("User profile: ",profile);
        done();
    })
);

//Auth Step-2: Route handler '/auth/google' to go into passport workflow designed in step1
app.get('/auth/google',passport.authenticate('google',{ //google go to above GoogleStrategy 
    scope:['profile','email']          //asking google to give us users profile info
}));

//Auth Step-3: Route handler '/auth/google/callback' coming from passport on this route
app.get('/auth/google/callback',passport.authenticate('google'));







//dynamic port binding
const port = process.env.PORT || 3000;
//changing port based on production(remote)or development(local) envirnomnet

//Listening to the client
app.listen(port);


