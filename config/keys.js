//Logic to figure out weather we are in development mode or production mode

if(process.env.NODE_ENV === 'production'){
    //we are in production - return the prodution keys prod.js

    module.exports = require('./prod');
}else{
    //we are in development mode- return the development keys dev.js

    module.exports = require('./dev');

}




