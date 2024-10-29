//package.json  "proxy": "http://localhost:5000",

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
    fetch("/api/text/0")
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
    fetch("/api/image/0")
      .then((response4) => response4.json())
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
