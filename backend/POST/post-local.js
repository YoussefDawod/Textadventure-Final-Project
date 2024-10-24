let data1 = "Spiderman, Joker, Gott und der Teufel";
let data2 = "Die unerwartete Allianz von Spidey, Joker, Gott und dem Teufel zog durch New York und konfrontierte Obama direkt in der Öffentlichkeit. Es kam zu einer epischen Schlacht, bei der die Zukunft der gesamten Nation auf dem Spiel stand.";
let data = { data1 }



let options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json"
  }
}

  fetch(`http:/localhost:5000/api/option/0`, options)
  .then((response) => response.json())
  .then((json) => console.log(json))





//////////////////////////////////////////////////