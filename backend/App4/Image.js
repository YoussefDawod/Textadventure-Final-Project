const express = require('express'); 
const app = express(); 

let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";
let keyWord = `Stachelschweine`;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "model": "openai/dall-e-3",
  "description": `A cute picture with 1 ${keyWord}`,
  "size": "square",
  "variations": 1
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.straico.com/v0/image/generation", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  // Export the app 
module.exports = app;