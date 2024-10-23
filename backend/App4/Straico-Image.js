// Express
const express = require("express");
const app = express();

// API Key
let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

// Count Steps
let counter = 0;

// Fetch Start
let keyWord = `Neo in der Matrix`;
let bindingWords = ` und bekannte dinge aus der Welt`;
let img = `Mach mir bitte ein einzelnes Bild dazu`;

// FetchFollow
let img2 = `Mach mir bitte ein einzelnes Bild zu dem letzen Stand in der Geschichte`;
let text = `
Neo fand einen Riss in der Realität, der ihn in eine parallele Dimension führte, in der die Gesetze der Physik völlig anders funktionierten.
Zu Neos Schrecken stellte er fest, dass in dieser Dimension böse Kreaturen aus reiner Finsternis herrschten, die die Energien der Menschen aussaugten. Er musste sich mit ihnen anlegen und eine Möglichkeit finden, in seine eigene Welt zurückzukehren, bevor es zu spät war.`;

// Post Header
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

// Post Body
var raw = JSON.stringify({
  model: "openai/dall-e-3",
  description: ` ${keyWord} ${bindingWords} ${img}`,
  size: "square",
  variations: 1,
});

var raw2 = JSON.stringify({
  model: "openai/dall-e-3",
  description: `${text}. ${img2}`,
  size: "square",
  variations: 1,
});

// Request Options
var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

var requestOptions2 = {
  method: "POST",
  headers: myHeaders,
  body: raw2,
  redirect: "follow",
};

//fetchFollow();

// Fetch Funktionen
async function fetchStart() {
  try {
    let newData;
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

async function fetchFollow() {
  try {
    let newData;
    const response = await fetch(
      "https://api.straico.com/v0/image/generation",
      requestOptions2
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

// Print Site
function showSite(variable) {
  // Define routes for image/
  app.get(`/${counter}`, (req, res) => {
    res.send(`${variable}`);
  });
}

// Export the app
module.exports = app;
