//Erster Post läuft über Internet
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data1, setTitle] = useState("");

  let data = { data1 };

  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  const onAccept = () => {
    post();
  };

  async function post() {
    let urlOption = "option/0";
    try {
      fetch(urlOption, options)
        .then((response) => response.json())
        .then((json) => console.log(json));
      post2();
    } catch (error) {
      post();
    }
  }

  async function post2() {
    let urlImage = "image/0";
    try {
      fetch(urlImage, options)
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error) {
      post2();
    }
  }

  return (
    <>
      <textarea onChange={(event) => setTitle(event.target.value)}></textarea>
      <button onClick={() => onAccept()}>POST</button>
    </>
  );
}

export default App;
