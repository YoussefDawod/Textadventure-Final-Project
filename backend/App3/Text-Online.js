// Express
const express = require("express");
const app = express();

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(express.json());

// API Key
let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

// Count Steps
let textcounter = 0;
let optioncounter = 0;

// Fetch Start
let option;
let keyWords;
let bindingWords = ` und bekannte dinge aus der Welt`;

// Post Header
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKey}`);
myHeaders.append("Content-Type", "application/json");

// FetchFollow
let textArray = [];

// Fetch Form
let formText = `
{ 
"0": "Text" und ein Komma danach`;

let formChoice = `
1: "Text",
2: "Text",
3: "Text"`;

function changeKey(variable) {
  keyWords = variable;
  fetchStart();
}

function useOption(variable) {
  option = variable;
  textArray.push(option);
  let TextArrayToString = textArray.toString();
  fetchFollow(TextArrayToString);
}

function saveStory(variable) {
  let text = variable;
  textArray.push(text);
  console.log(textArray);
}

// Fetch Funktionen
async function fetchStart(variable) {
  // Post Header
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);
  myHeaders.append("Content-Type", "application/json");
  // Post Body
  var raw = JSON.stringify({
    model: "anthropic/claude-3-haiku:beta",
    message: `Eine Kurze Geschichte rund um ${
      keyWords + bindingWords
    }. Schreibe mir bitte die Geschichte in deutsch ausgefallen in ein paar Sätzen weiter.
Hier ist die Form dafür. ${formText}. Und danach keine Worte mehr.
Nun gebe bitte 3 unterschiedliche Optionen welche die Geschichte in unterschiedliche Richtungen führen kann. Jede Option sollte aus 1-2 Sätzen bestehen.
Die Geschichte sollte ausgefallen sein. Und es sollte in dieser Form zurückkommen. Die Geschichte sollte nur dort landen wo Text steht. 
Hier ist die Form. ${formChoice}. Und danach keine Worte mehr.`,
  });
  // Request Options
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  let newData;
  let endResult;
  try {
    const response = await fetch(
      "https://api.straico.com/v0/prompt/completion",
      requestOptions
    );
    const jsondata = await response.json();
    newData = jsondata.data.completion.choices[0].message.content;
    let thisResult = newData.replaceAll("\n", "");
    thisResult = newData.slice(0, -2);
    endResult = thisResult.split(":").splice(1).join(": ");
    let options = endResult.split(`"`);
    let text = options[1];
    let option1 = options[3];
    let option2 = options[5];
    let option3 = options[7];
    let newOptions = { text, option1, option2, option3 };
    let postOptions = {
      method: "POST",
      body: JSON.stringify(newOptions),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`https://adventure.api.binarybears.net/api/text/0`, postOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.log(error);
  }
}

async function fetchFollow(variable) {
  // Post Header
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);
  myHeaders.append("Content-Type", "application/json");
  //Post Body
  var raw2 = JSON.stringify({
    model: "anthropic/claude-3-haiku:beta",
    message: `${textArray}. Schreibe mir bitte die Geschichte in deutsch in einem Absatz weiter.
    Hier ist die Form dafür. ${formText}. Und danach keine Worte mehr.
    Nun gebe bitte 3 unterschiedliche Optionen was als nächstes passieren soll nach dem Absatz den du geschrieben hast. Jede Option sollte aus 1-2 Sätzen bestehen.
    Teile der Geschichte sollten nicht doppelt vorkommen.
    Die Geschichte sollte ausgefallen sein. Und es sollte in dieser Form zurückkommen. Die Geschichte sollte nur dort landen wo Text steht. 
    Hier ist die Form. ${formChoice}. Und danach keine Worte mehr.`,
  });
  // Request Options
  var requestOptions2 = {
    method: "POST",
    headers: myHeaders,
    body: raw2,
    redirect: "follow",
  };
  let newData;
  let endResult;
  try {
    const response = await fetch(
      "https://api.straico.com/v0/prompt/completion",
      requestOptions2
    );
    const jsondata = await response.json();
    newData = jsondata.data.completion.choices[0].message.content;

    let thisResult = newData.replaceAll("\n", "");
    thisResult = newData.slice(0, -2);
    endResult = thisResult.split(":").splice(1).join(": ");
    let options = endResult.split(`"`);
    let text = options[1];

    let option1 = options[3];
    let option2 = options[5];
    let option3 = options[7];

    let newOptions = { text, option1, option2, option3 };
    console.log(newOptions);
    showTextSite(newOptions);
    saveStory(newOptions.text);
} catch (error) {
    console.log(error);
  }
}

// Route that receives a POST request to /api/text/
app.post(`/text/0`, function (req, res) {
  if (textcounter === 0) {
    const body = req.body;
    console.log(body);
    let newBody = JSON.stringify(body);
    showTextSite(newBody);
    saveStory(body.text);
  } else {
    const body = req.body;
    console.log(body);
    let newBody = JSON.stringify(body);
    showTextSite(newBody);
    saveStory(body.text);
  }
});

// Print Site api/text/
function showTextSite(variable) {
  // Define routes for text/
  app.get(`/text/${textcounter}`, (req, res) => {
    res.send(`${variable}`);
  });
  textcounter += 1;
  console.log("textcounter:" + textcounter);
}

// Route that receives a POST request to /api/option/
app.post(`/option/0`, function (req, res) {
  const body = req.body;
  let newBody2 = body.data1;
  let newBody3 = body.data2;

  if (optioncounter === 0) {
    showOptionSite(newBody2);
    changeKey(newBody2);
  } else {
    showOptionSite(newBody3);
    useOption(newBody3);
  }
});

// Print Site /api/option/
function showOptionSite(variable) {
  // Define routes for api/text/post
  app.get(`/option/${optioncounter}`, (req, res) => {
    res.send(variable);
  });
  optioncounter += 1;
  console.log("optioncounter:" + optioncounter);
}

// Export the app
module.exports = app;
