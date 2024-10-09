const express = require("express");
const app = express();

let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";
let counter = 0;
let keyWord = `Sasuke Uchiha`;
let img = `Mach mir bitte ein einzelnes Bild zu dem letzen Stand in der Geschichte`

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  model: "openai/dall-e-3",
  description: ` 
  Neo fand einen Riss in der Realität, der ihn in eine parallele Dimension führte, in der die Gesetze der Physik völlig anders funktionierten.
  Zu Neos Schrecken stellte er fest, dass in dieser Dimension böse Kreaturen aus reiner Finsternis herrschten, die die Energien der Menschen aussaugten. Er musste sich mit ihnen anlegen und eine Möglichkeit finden, in seine eigene Welt zurückzukehren, bevor es zu spät war.
   ${img}`,
  size: "square",
  variations: 1,
});


var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};


fetchStart();

  async function fetchStart() {
    try {
      let newData;
      let endResult;
      const response = await fetch(
        "https://api.straico.com/v0/image/generation",
        requestOptions
      );
      const jsondata = await response.json();
      newData = jsondata.data.images;
      let first = `{ "link": `;
      let last = ` }`;
      result = first + newData + last;
      
        console.log(result);
        showSite(result);
     
      
    } catch (error) {
      console.log(error);
    }
  }

  function showSite(variable) {
    // Define routes for App2
    app.get(`/${counter}`, (req, res) => {
      res.send(`${variable}`);
    });
  }



// Export the app
module.exports = app;
