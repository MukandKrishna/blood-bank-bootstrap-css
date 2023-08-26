const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");

//dot config
dotenv.config();

//mongodb connection
connectDB();

 // rest object 
const app = express(); // all funcionalities are added in this app varaible

// middlewares
app.use(express.json()); // to parse json data
app.use(cors()); // to connect react app and nodejs app
app.use(morgan('dev')); // to log the request in the console

// Define a route for the root URL

app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
// app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));


//PORT
const PORT = process.env.PORT || 8000;

// Listen
// and callback function to handle the response
//listen
app.listen(PORT, () => {
    console.log(
      `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
        .bgBlue.white
    );
  });



// nodejs code donot update automatically, so we need to install nodemon
//  mvc: model view controller , so that multiple people can work on the same project
// {
    //  model: database( schema , designing )
    //  view: frontend (html, css, js)
    //  controller: backend (nodejs, expressjs, mongodb, mysql, postgresql, etc) , callback function to handle the response
    // routes: routes for user, admin etc..
    // config: configuration files (database, server, etc) 
    // middlewares: (authentication, authorization, etc)
    // utils: (helper functions, etc)

//  mvc pattern completed             }

// we have scripts in package.json file, we can run the server:  npm run server
// download cors (middleware): react app and nodejs app are running on different ports, so we need to download cors to connect them
