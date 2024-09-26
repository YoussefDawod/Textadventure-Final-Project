const express = require('express'); 
const app = express(); 

let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";
let keyWord = `Stachelschweine`;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "model": "anthropic/claude-3-haiku:beta",
  "message": `Textadventure in Deutsch mit Handlungen rund um ${keyWord} etwa 30 Wörter mit 3 Auswahlmöglichkeiten`
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.straico.com/v0/prompt/completion", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result + "\n"))
  .then(result => {
    obj = result;
   })
  .catch(error => console.log('error', error));


function showText(){
  // Define routes for App2 
  app.get('/', (req, res) => { 
    res.send(`${obj}`); 
  }); 
}


// Export the app 
module.exports = app;
