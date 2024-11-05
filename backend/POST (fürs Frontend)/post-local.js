let data1 = "Homelander"; //Erster Post - Keyword
let data2 = "Homelander läuft nach NY im Marvel und fängt lauthals streit an"; //Alle Anworten danach
let data = { data2 }


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
  
  fetch(`http:/localhost:5000/api/image/0`, options)
  .then((response) => response.json())
  .then((json) => console.log(json))

//////////////////////////////////////////////////