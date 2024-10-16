const express = require("express");
const app = express();

let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

let keyWord = `Neo in der Matrix`;
let bindingWords = ` und bekannte dinge aus der Welt`;
let counter = 0;
let img = `Mach mir bitte ein einzelnes Bild dazu`;
let img2 = `Mach mir bitte ein einzelnes Bild zu dem letzen Stand in der Geschichte`;

let text = `
Neo fand einen Riss in der Realität, der ihn in eine parallele Dimension führte, in der die Gesetze der Physik völlig anders funktionierten.
Zu Neos Schrecken stellte er fest, dass in dieser Dimension böse Kreaturen aus reiner Finsternis herrschten, die die Energien der Menschen aussaugten. Er musste sich mit ihnen anlegen und eine Möglichkeit finden, in seine eigene Welt zurückzukehren, bevor es zu spät war.`;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

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

fetch2();

async function fetchStart() {
  try {
    let newData;
    let endResult;
    const response = await fetch(
      "https://api.straico.com/v0/image/generation",
      requestOptions
    );
    const jsondata = await response.json();
    newData = jsondata.data.completion.choices[0].message.content;
    endResult = newData.split(":").splice(1).join(":");
    if (endResult != (undefined || ``)) {
      console.log(endResult);
      showSite(endResult);
    } else {
      fetchStart();
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetch2() {
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

function showSite(variable) {
  // Define routes for App2
  app.get(`/${counter}`, (req, res) => {
    res.send(`${variable}`);
  });
}

// Export the app
module.exports = app;
