// Express
const express = require('express'); 
const app = express(); 

// API Key
let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

// Post Header
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);

// Request Options
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// Fetch Funktion
fetch("https://api.straico.com/v0/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result + "\n"))
  .catch(error => console.log('error', error));


// Export the app 
module.exports = app;