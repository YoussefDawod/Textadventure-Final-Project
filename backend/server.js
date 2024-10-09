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
}));
app.use(express.json());

// Mount App1
const app1 = require("./App1/User.js");
app.use("/app1", app1);

// Mount App2
const app2 = require("./App2/Models.js");
app.use("/app2", app2);

// Mount App3
const app3 = require("./App3/Text.js");
app.use("/app3", app3);

// Mount App4
const app4 = require("./App4/Image.js");
app.use("/app4", app4);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`CombinedApp is listening on port ${port}`);
});
