// Express
const express = require("express");
const app = express();

// API Key
let apiKey = "D7-mCUkDibmneqBpJ9VWzBmnOByFEKwSuFDGhOgPzSFGSxRmTVZ";

// Count Steps
let imagecounter = 0;

// Fetch Start
let keyWord;
let bindingWords = ` und bekannte dinge aus der Welt`;
let img = `Mach mir bitte ein einzelnes Bild dazu`;

// FetchFollow
let img2 = `Mach mir bitte ein einzelnes Bild zu dem letzen Stand in der Geschichte`;
let text;

function changeKey(variable) {
  keyWord = variable;
  fetchStart(keyWord);
}

function useOption(variable) {
  text = variable;
  fetchFollow(text);
}

function saveStory(variable) {
  text = variable;
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
    model: "openai/dall-e-3",
    description: ` ${variable} ${bindingWords} ${img}`,
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

async function fetchFollow(variable) {
  // Post Header
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);
  myHeaders.append("Content-Type", "application/json");

  // Post Body
  var raw2 = JSON.stringify({
    model: "openai/dall-e-3",
    description: `${variable}. ${img2}`,
    size: "square",
    variations: 1,
  });

  // Request Options
  var requestOptions2 = {
    method: "POST",
    headers: myHeaders,
    body: raw2,
    redirect: "follow",
  };
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

// Route that receives a POST request to /api/image/
app.post(`/0`, function (req, res) {
  const body = req.body;
  let newBody2 = body.data1;
  let newBody3 = body.data2;
  console.log(body);
  
  if (imagecounter === 0) {
    changeKey(newBody2);
    
  } else {
    useOption(newBody3);
  }
});

// Print Site
function showSite(variable) {
  // Define routes for image/
  app.get(`/${imagecounter}`, (req, res) => {
    res.send(`${variable}`);
  });
  imagecounter += 1;
  console.log("imagecounter:" + imagecounter);
}

// Export the app
module.exports = app;
