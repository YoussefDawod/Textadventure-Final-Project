let data1 = "Homelander und der Joker"; //Erster Post - Keyword
let data2 = "Homelander und der Joker haben das perfekte Team gebildet"; //Alle Anworten danach

let data = { data1 }

let options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json"
  }
}

let urlOption = 'https://adventure.api.binarybears.net/api/option/0';
let urlImage = 'https://adventure.api.binarybears.net/api/image/0';

  fetch(urlOption, options)
  .then((response) => response.json())
  .then((json) => console.log(json))

  fetch(urlImage, options)
  .then((response) => response.json())
  .then((json) => console.log(json))


//////////////////////////////////////////////////