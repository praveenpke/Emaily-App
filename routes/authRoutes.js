const passport = require('passport');


//we are exporting this function and call from the express app in index.js
module.exports = (app)=>{
    //Auth Step-2: Route handler '/auth/google' to go into passport workflow designed in step1
    app.get('/auth/google',passport.authenticate('google',{ //google go to above GoogleStrategy 
        scope:['profile','email']          //asking google to give us users profile info
    }));

    //Auth Step-3: Route handler '/auth/google/callback' coming from passport on this route
    app.get('/auth/google/callback',passport.authenticate('google'));

}

