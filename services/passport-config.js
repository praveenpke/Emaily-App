const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');



//different way of importing mongoose models
const User = mongoose.model('users');



passport.serializeUser((user,done)=>{  //serialize user takes user Model
    //user id is mongodb generated id for the document not the google profile id
    done(null,user.id);            //done is callback to inform passport, null means theres is no error

});

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user =>{  //user doc pulled by given id
            done(null,user);
        })
});


//Auth step-1: creating new instance of google strategy using passport
passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback'  //setup this callback url in console.developers.google
    },(accessToken,refreshToken,profile,done)=>{

        //new user model instance
        new User({googleId:profile.id})
            .save((error,result)=>{
                if(error){
                    console.log("Error During saving document in collection User",error.message);
                    
                    //if user already signs up then we identify that user and attatch to passport as current user--signed in
                    User.findOne({googleId:profile.id},(error,user)=>{
                        done(null,user);  
                    });
                 
                }else{
                    console.log("Stored Document in the User collection: ",result);
                    done(null,result);
                }
               
            })
              //saying to passport that we are done with user authentication
    })
);


