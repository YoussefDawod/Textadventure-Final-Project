// Import the necessary modules
const express = require("express");
const cors = require("cors");
require('dotenv').config();

// Create an instance of an Express application
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Port von Vite
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Hinzugefügt OPTIONS
  allowedHeaders: 'Content-Type,Authorization' // Hinzugefügt
}));
app.use(express.json());

// Handle Preflight Requests
app.options('*', cors()); // Hinzugefügt

// Mount App1
const app1 = require("./App1/User.js");
/* Mounts App1 at the '/app1' endpoint / Not used in browser*/
app.use("/app1", app1);

// Mount App2
const app2 = require("./App2/Models.js");
/*  Mounts App2 at the '/app2' endpoint  / Not used in browser*/
app.use("/app2", app2);

// Mount App3
const app3 = require("./App3/Text.js");
/*  Mounts App3 at the '/text' endpoint  */
app.use("/api/", app3);

/*  Mount App4 */
const app4 = require("./App4/Straico-Image.js");
/*  Mounts App4 at the '/image' endpoint  */
app.use("/api/image", app4);

/* Start the server */
const port = 5000;
app.listen(port, () => {
  console.log(`CombinedApp is listening on port ${port}`);
});