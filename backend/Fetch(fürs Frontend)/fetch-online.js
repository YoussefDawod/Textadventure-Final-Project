//package.json  "proxy": "https://adventure.api.binarybears.net/api",

import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setItems1] = useState([]);
  const [image, setItems2] = useState([]);
  let load = false;

  useEffect(() => {
    fetchText();
    fetchImage();
  }, []);

  function fetchText() {
    fetch("/text/0", {
      mode: 'cors'
    })
      .then((response1) => response1.json())
      .then((data1) => {
        setItems1(data1);
        console.log(text);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function fetchImage() {
    fetch("/image/0", {
      mode: 'cors'
    })
      .then((response4) => response4.text())
      .then((data4) => {
        setItems2(data4);
        console.log(image);
        load = true;
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (load === false) {
    return (
      <>
        <p>{text.text}</p>
        <p>{text.option1}</p>
        <p>{text.option2}</p>
        <p>{text.option3}</p>
        <p>{image}</p>
      </>
    );
  } else {
    return <p>No to show</p>;
  }
}

export default App;
