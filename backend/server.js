/* Import the Express module */
const express = require("express");
/* Create an instance of an Express application  */
const app = express();
/*Mount App1 */
const app1 = require("./App1/User.js");
/* Mounts App1 at the '/app1' endpoint  */
app.use("/app1", app1);
/*  Mount App2 */
const app2 = require("./App2/Models.js");
/*  Mounts App2 at the '/app2' endpoint  */
app.use("/app2", app2);
/*  Mount App3 */
const app3 = require("./App3/Text.js");
/*  Mounts App3 at the '/app3' endpoint  */
app.use("/api/text", app3);
/*  Mount App4 */
const app4 = require("./App4/Straico-Image.js");
/*  Mounts App4 at the '/app4' endpoint  */
app.use("/api/image", app4);
/* Start the server */
const port = 5000;
app.listen(port, () => {
  console.log(`CombinedApp is listening on port ${port}`);
});