import "../Styles/Test-Gamescreen.css";
import { useState, useEffect } from "react";
import Icon from "../Components/Icons"; // Assuming you have an Icons component

function Fetch({ scenarioTitle, onExit }) {
  const [text, setItems1] = useState([]);
  const [image, setItems2] = useState(``);
  const [load, setLoad] = useState(false);
  const [loadThis, setLoadThis] = useState(false);
  const [data2, setTitle] = useState(``);
  const [counter, setCounter] = useState(0);
  let localURL = "http://localhost:5000/api/";
  let onlineURL = "https://adventure.api.binarybears.net/api/";

  async function Fetch() {
    setTimeout(fetchText, 20000);
    setTimeout(fetchImage, 20000);
  }

  function fetchText() {
    fetch(`${localURL}text/${counter}`)
      .then((response1) => response1.json())
      .then((data1) => {
        setItems1(data1);
        
    
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchImage() {
    fetch(`${localURL}image/${counter}`)
      .then((response4) => response4.json())
      .then((data4) => {
        setItems2(data4);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let data = { data2 };

  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  function PostThisSHIT() {
    
    console.log(image);
        console.log(text);
        console.log(data2);
        
    setItems1([]);
    setItems2(``);
    setLoad(false);
    setCounter((counter) => counter + 1);
    console.log(counter);
    post();
    setLoadThis(false);
    Fetch();
  }

  async function post() {
    let urlOption = `${localURL}option/0`;
    try {
      fetch(urlOption, options)
        .then((response) => response.json())
        .then((json) => console.log(json));
      post2();
    } catch (error) {
      console.log(error);
    }
  }

  async function post2() {
    let urlImage = `${localURL}image/0`;
    try {
      fetch(urlImage, options)
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }
  }
  function openLoad(){
    Fetch();
    setLoad(true);
  }

  function Check() {
    if (!loadThis) {
      Fetch();
      setTimeout(openLoad, 20000);
      setLoadThis(true);
    }

    if (image && (text.text || text.option1) !== ``) {
      setLoad(true);
    }
    

    
  }
  
  if (load) {
    return (
      <>
        <div className="fetch">
          <img src={image}></img>
          <p className="text">{text.text}</p>
          <p className="option">{text.option1}</p>
          <p className="option">{text.option2}</p>
          <p className="option">{text.option3}</p>
          <br></br>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Geben Sie Ihre Eingabe ein"
          />
          <button onClick={PostThisSHIT}>Send</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img
          src="../../Images/loading.png"
          className="App-logo"
          alt="logo"
        />
        {Check()}
      </>
    );
  }
}

export default Fetch;