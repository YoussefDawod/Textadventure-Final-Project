import "../../Styles/storiesSeite/GameScreen.css";
import { useState, useEffect, useCallback } from "react";
import Icon from "../../Components/Icons";

function GameScreen({ scenarioTitle, onExit }) {
  const [text, setItems1] = useState([]);
  const [image, setItems2] = useState([]);
  const [load, setLoad] = useState(false);
  const [data2, setTitle] = useState(``);
  const [counter, setCounter] = useState(0);
  let localURL = "http://localhost:5000/api/";
  let onlineURL = "https://adventure.api.binarybears.net/api/";

  const FetchData = useCallback(async () => {
    setTimeout(fetchText, 20000);
    setTimeout(fetchImage, 20000);
  }, [counter]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

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
    FetchData();
  }

  function maybePost1(variable) {
    setTitle((data2) => (data2 = text.option1));
    setLoad(false);
    setCounter((counter) => counter + 1);
    post();
    FetchData();
    console.log("maybe");
    console.log(counter);
  }

  function maybePost2(variable) {
    setTitle((data2) => (data2 = text.option2));
    setLoad(false);
    setCounter((counter) => counter + 1);
    post();
    console.log(counter);
    FetchData();
    console.log("maybe");
  }

  function maybePost3(variable) {
    setTitle((data2) => (data2 = text.option3));
    setLoad(false);
    setCounter((counter) => counter + 1);
    post();
    console.log(counter);
    FetchData();
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
      FetchData();
    } catch (error) {
      post2();
    }
  }

  return (
    <>
      <div className="exit-button" onClick={onExit}>
        <Icon type="exit" />
      </div>
      <main className="main-gameScreen">
        <div className="game-screen">
          {load ? (
            <div className="story-content">
              <h2>{scenarioTitle}</h2>
              <img src={image} className="story-image" alt="fetch" />
              <p className="story-text">{text.text}</p>
              <div className="story-options">
                <p className="option" onClick={() => maybePost1()}>
                  {text.option1}
                </p>
                <p className="option" onClick={() => maybePost2()}>
                  {text.option2}
                </p>
                <p className="option" onClick={() => maybePost3()}>
                  {text.option3}
                </p>
              </div>
              <div className="user-interaction">
                <input
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Geben Sie Ihre Eingabe ein"
                  id="userInput"
                />
                <div onClick={maybePost}>
                  <Icon type="send" />
                </div>
              </div>
            </div>
          ) : (
            <div className="loading-overlay">
              <img
                src="/Logo/tia-logo.svg"
                className="loading-logo"
                alt="loading"
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default GameScreen;