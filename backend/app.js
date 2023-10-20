// Importing the express module to be used in this application.
const express = require('express');

// Creating an instance of an Express application.
const app = express();

// Using middleware to intercept all requests, log a message, and then call the next middleware in the stack.
app.use((req, res, next)=>{
  console.log('First Middleware')
  next(); // Calling the next middleware or route handler
})

// Using another middleware to intercept all requests, send a response with a message, and end the response process.
app.use((req, res, next)=>{
 res.send('hello from express')  // Sending a text response to the client
})

// Exporting the configured Express application to be used in other parts of the application (e.g., server.js).
module.exports = app