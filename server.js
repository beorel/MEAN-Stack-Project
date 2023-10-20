//importing HTTP module, APP Module, Debug Module
const http = require('http');
const app = require('./backend/app')
const debug = require("debug")("node-angular")

//normalizes a port value, ensuring it’s a valid number
//or named pipe. It will return the port number if valid or false if not
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    //named pipe
    return val
  }

  if (port >= 0) {
    //port number
    return port
  }
  return false
}

//handles specific server errors like 'EACCES'
//(permission denied) and 'EADDRINUSE' (address in use)
const onError = error => {
  if (error.syscall !== "listen") {
    throw error
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADORINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error
  }
}

//executes when the server starts listening,
//logging which port or pipe the server is running on
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("listening on " + bind);
}

//Setting Port & Assigning Port to Express App
const port = process.env.PORT || 3000;
app.set("port", port)

// Creating and Configuring the HTTP Server
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);