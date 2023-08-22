const express = require('express');

 // rest object 
const app = express(); // all funcionalities are added in this app varaible


// routes
// 1 test route 
// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Welcome to Blood Bank App",
//     })
// })
//  will take response and send back to the client/user, will handle middleware separately

// e.g: http://localhost:3000/

// Define a route for the root URL

app.use('/api/v1/test', require('./routes/testRoutes'));

//PORT
const PORT = 8000;

// Listen
// and callback function to handle the response
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})



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
