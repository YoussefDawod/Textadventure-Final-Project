const express = require("express");
const app = express();

let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

let keyWords = `Neo in der Matrix`;
let bindingWords = ` und bekannte dinge aus der Welt`;
//${keyWords + bindingWords}.
let text = `
Neo fand einen Riss in der Realität, der ihn in eine parallele Dimension führte, in der die Gesetze der Physik völlig anders funktionierten.
Zu Neos Schrecken stellte er fest, dass in dieser Dimension böse Kreaturen aus reiner Finsternis herrschten, die die Energien der Menschen aussaugten. Er musste sich mit ihnen anlegen und eine Möglichkeit finden, in seine eigene Welt zurückzukehren, bevor es zu spät war.`;

let form = `
{ 
"1": "Text",
"2": "Text",
"3": "Text"
}`

let counter = 0;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  model: "anthropic/claude-3-haiku:beta",



  message: `Eine Kurze Geschichte rund um ${
    keyWords + bindingWords
  } mit 1-2 Sätzen Text. Danach bitte eine Zeile freilassen. Nun gebe bitte 3 Auswahlmöglichkeiten welche die Geschichte weiterschreiben. 
  Die Geschichte sollte ausgefallen sein. Und es sollte in dieser Form zurückkommen. Die Geschichte sollte nur dort landen wo Text steht. 
  Hier ist die Form. ${form}. Und danach keine Worte mehr.`,
});

var raw2 = JSON.stringify({
  model: "anthropic/claude-3-haiku:beta",
  message: `${text}. Schreibe die Geschichte mit 1-2 Sätze weiter. Danach bitte eine Zeile freilassen. 
  Nun gebe bitte 3 Auswahlmöglichkeiten welche die Geschichte weiterschreiben. Die Geschichte sollte ausgefallen sein. 
  Und es sollte in dieser Form zurückkommen. Die Geschichte sollte nur dort landen wo Text steht. Hier ist die Form. ${form}. 
  Und danach keine Worte mehr. `,



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
      "https://api.straico.com/v0/prompt/completion",
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
    let endResult;
    const response = await fetch(
      "https://api.straico.com/v0/prompt/completion",
      requestOptions2
    );
    const jsondata = await response.json();
    newData = jsondata.data.completion.choices[0].message.content;
    endResult = newData.split(":").splice(1).join(":");
    final = `{ "1":`;
    finalResult = final + endResult;
    if(finalResult != (undefined || ``)) {
      console.log(finalResult);
      showSite(finalResult);
    } else {
      fetch2();
    }
  } catch (error) {
    console.log(error);
  }
}


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
      "https://api.straico.com/v0/prompt/completion",
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
    let endResult;
    const response = await fetch(
      "https://api.straico.com/v0/prompt/completion",
      requestOptions2
    );
    const jsondata = await response.json();
    newData = jsondata.data.completion.choices[0].message.content;
    endResult = newData.split(":").splice(1).join(":");
    final = `{ "1":`;
    finalResult = final + endResult;
    if(finalResult != (undefined || ``)) {
      console.log(finalResult);
      showSite(finalResult);
    } else {
      fetch2();
    }
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
