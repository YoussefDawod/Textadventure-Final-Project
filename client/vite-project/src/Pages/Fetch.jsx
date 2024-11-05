import "../Styles/Test-Gamescreen.css";
import { useState, useEffect } from "react";

function Fetch() {
  const [text, setItems1] = useState([]);
  const [image, setItems2] = useState([]);
  const [load, setLoad] = useState(false);
  const [data2, setTitle] = useState(``);
  const [counter, setCounter] = useState(0);
  let localURL = "http://localhost:5000/api/";
  let onlineURL = "https://adventure.api.binarybears.net/api/";

  Fetch();

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
        setTimeout(fetchText, 1000);
        
      });
  }

  function fetchImage() {
    fetch(`${localURL}image/${counter}`)
      .then((response4) => response4.json())
      .then((data4) => {
        setItems2(data4);
        setLoad(true);
      })
      .catch((error) => {
        setTimeout(fetchImage, 1000);
        
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

  function maybePost() {
    
    setLoad(false);
    post();
    
    setCounter((counter) => counter + 1);
    console.log(counter);
    Fetch();
  }

  function maybePost1(variable) {
    setTitle((data2) => data2 = text.option1)
    setLoad(false);
    setCounter((counter) => counter + 1);
    post();
    Fetch();
    console.log("maybe");
    console.log(counter);
  }

  function maybePost2(variable) {
    
    setTitle((data2) => data2 = text.option2)
    setLoad(false);
    setCounter((counter) => counter + 1);
    post();
    console.log(counter);

    Fetch();
    console.log("maybe");
  }

  function maybePost3(variable) {
    setTitle((data2) => data2 = text.option3)
    setLoad(false);
    setCounter((counter) => counter + 1);
    post();
    console.log(counter);

    Fetch();
    console.log("maybe");
  }

  async function post() {
    let urlOption = `${localURL}option/0`;
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
    let urlImage = `${localURL}image/0`;
    try {
      fetch(urlImage, options)
        .then((response) => response.json())
        .then((json) => console.log(json));

      Fetch();
    } catch (error) {
      post2();
    }
  }

  if (load) {
    return (
      <>
        <div className="fetch">
        <img src={image} className="fetch-image"></img>
          <p>{text.text}</p>
          <p className="option">
            {text.option1}
          </p>
          <p className="option">
            {text.option2}
          </p>
          <p
          className="option">
            {text.option3}
          </p>
          <br></br>
          <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
            />
          <button onClick={maybePost}>Send</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img
          src="https://w7.pngwing.com/pngs/414/888/png-transparent-waiting-illustration-thumbnail.png"
          className="App-logo"
          alt="logo"
        />
      </>
    );
  }
}

export default Fetch;
