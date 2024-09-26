const express = require("express");
const app = express();

let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://api.straico.com/v1/models", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result + "\n"))
  .catch((error) => console.log("error", error));


// Export the app
module.exports = app;

