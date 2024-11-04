import "../Styles/Test-Gamescreen.css";
import React, { useState, useEffect, useRef } from "react";
import Fetch from "./Fetch";

function Gamescreen() {
  const [data1, setTitle] = useState();
  let data = { data1 };
  let localURL = "http://localhost:5000/api/"
  let onlineURL = "https://adventure.api.binarybears.net/api/"
  
  const [load, setLoad] = useState(false);
  

  function Load() {
    setLoad(true);
  }

  function onAccept() {
    console.log(data);

    let options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };
    Load();
    post();

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
  }

  
  function ShowSite() {
    if (!load) {
      return (
        <>
          <div className="post">
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
            />
            <button onClick={() => onAccept()}>PLAY</button>
          </div>
        </>
      );
    }
    if (load) {
      return (
      <>
        <Fetch></Fetch>
      </>
    );}
  }

  return (
    <>
      <h1>GameScreen</h1>
      {ShowSite()}
    </>
  );

}

export default Gamescreen;
