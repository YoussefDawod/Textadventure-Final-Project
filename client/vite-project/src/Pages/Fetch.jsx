import "../Styles/Test-Gamescreen.css";
import React, { useState, useEffect } from "react";

function Fetch() {
  const [text, setItems1] = useState([]);
  const [image, setItems2] = useState([]);
  const [load, setLoad] = useState(false);
  const [data2, setTitle] = useState([]);
  const [count, setCounter] = useState(0);
  let counter = 0;

  ShowSite();
  Fetch();

  async function Fetch() {
    setTimeout(fetchText, 5000);
    setTimeout(fetchImage, 10000);
  }

  function fetchText() {
    fetch(`http://localhost:5000/api/text/${counter}`)
      .then((response1) => response1.json())
      .then((data1) => {
        setItems1(data1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchImage() {
    fetch(`http://localhost:5000/api/image/${counter}`)
      .then((response4) => response4.json())
      .then((data4) => {
        setItems2(data4);
        if (image !== undefined || ``) {
          setLoad(true);
          ShowSite();
        }
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

  /*function optionThis(variable) {
    if (data2 !== variable) {
      setTitle(variable);
    }
    //setLoad(false);
    console.log(data2);
    setCounter((counter) => counter + 1);

    console.log(counter);
  }*/

  async function post() {
    setLoad(true);
    let urlOption = "http://localhost:5000/api/option/0";
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
    let urlImage = "http://localhost:5000/api/image/0";
    try {
      fetch(urlImage, options)
        .then((response) => response.json())
        .then((json) => console.log(json));

      Fetch();
    } catch (error) {
      console.log(error);
    }
  }

  function ShowSite() {
    if (load) {
      return (
        <>
          <div className="fetch">
            <img src={image}></img>
            <p>{text.text}</p>
            <button className="option">
              {text.option1}
            </button>
            <button className="option">
              {text.option2}
            </button>
            <button className="option">
              {text.option3}
            </button>
            <br></br>
            <textarea
              onChange={(event) => setTitle(event.target.value)}
            ></textarea>
            <button>Send</button>
          </div>
        </>
      );
    } else {
      return(
      <p>Loading</p>
    );
    }
  }
  return <>{ShowSite()}</>;
}

export default Fetch;
