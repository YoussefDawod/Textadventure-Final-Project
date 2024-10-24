let data1 = "Spiderman";
let data2 = "ein besonderer Spiderman stirbt in der Schlacht";
//Allerdings wird deutlich, dass der Grüne Kobold nicht alleine handelte, sondern Teil eines größeren Netzwerks von Superschurken war. Spiderman und der Joker-Gott müssen nun herausfinden, wer hinter diesem Plan steckt und wie sie die gesamte Stadt vor der drohenden Gefahr schützen können
let data = { data1 }



let options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json"
  }
}

let counter = 0;

  fetch(`https://adventure.api.binarybears.net/api/option/${counter}`, options)
  .then((response) => response.json())
  .then((json) => console.log(json))




//////////////////////////////////////////////////