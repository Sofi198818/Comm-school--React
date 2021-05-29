import React, { useEffect, useState } from "react";
import ShowHistory from "./ShowHistory";

function App() {
  const [eachPerson, setEachPerson] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [info, setInfo] = useState([]);

  const FetchData = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setEachPerson(data.value);
        setInfo([...info, data.value]);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {!isClicked ? (
        <>
          <button onClick={() => FetchData()}> Show Joke </button>
          <div className="eachPerson">{eachPerson} </div>
          <button
            className="button1"
            onClick={() => setIsClicked((prev) => !prev)}
          >
            show history
          </button>
        </>
      ) : (
        <ShowHistory info={info} setIsClicked={setIsClicked} />
      )}
    </div>
  );
}

export default App;
