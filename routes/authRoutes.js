const passport = require('passport');


//we are exporting this function and call from the express app in index.js
module.exports = (app)=>{
    //Auth Step-2: Route handler '/auth/google' to go into passport workflow designed in step1
    app.get('/auth/google',passport.authenticate('google',{ //google go to above GoogleStrategy 
        scope:['profile','email']          //asking google to give us users profile info
    }));

    //Auth Step-3: Route handler '/auth/google/callback' coming from passport on this route
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (request,response)=>{
            response.redirect('/surveys');//wiring to client route
        }
    );

    //route handler to check whether cookie is set and passport is keep tracking it
    app.get('/api/current_user',(request,response)=>{
        response.send(request.user);
    });

    //Route handler for logout user
    app.get('/api/logout',(request,response)=>{
        request.logout();    //passport destroys the user object stored currently in cookie
        response.redirect('/');
    });

}

