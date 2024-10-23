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
<<<<<<< HEAD
=======
/* Mounts App1 at the '/app1' endpoint / Not used in browser*/
>>>>>>> f59a70118850a967e3617a236db1255940312088
app.use("/app1", app1);

// Mount App2
const app2 = require("./App2/Models.js");
<<<<<<< HEAD
=======
/*  Mounts App2 at the '/app2' endpoint  / Not used in browser*/
>>>>>>> f59a70118850a967e3617a236db1255940312088
app.use("/app2", app2);

// Mount App3
const app3 = require("./App3/Text.js");
<<<<<<< HEAD
app.use("/app3", app3);

// Mount App4
const app4 = require("./App4/Image.js");
app.use("/app4", app4);

// Start the server
const port = process.env.PORT || 5000;
=======
/*  Mounts App3 at the '/text' endpoint  */
app.use("/api/", app3);
/*  Mount App4 */
const app4 = require("./App4/Straico-Image.js");
/*  Mounts App4 at the '/image' endpoint  */
app.use("/api/image", app4);
/* Start the server */
const port = 5000;
>>>>>>> f59a70118850a967e3617a236db1255940312088
app.listen(port, () => {
  console.log(`CombinedApp is listening on port ${port}`);
});
