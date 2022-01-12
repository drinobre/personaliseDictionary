import "../App/App.css";
import { useState } from "react";
import NextButton from "./NextButon";
import sculptureList from "../../libs/galeryData";

function App() {
  const [index, setIndex] = useState(0);

  function handleClickNext() {
    setIndex(index + 1);
    // if (index > sculptureList.length) {
    //   // setIndex(0);
    // }
  }

  // store the array[index] into a variable to easy reference on the return
  const sculpture = sculptureList[index];

  return (
    <div className="App">
      <NextButton
        onClick={handleClickNext}
        title={sculpture.name}
        artist={sculpture.artist}
        index={index}
        arrayLenght={sculptureList.length}
        img={sculpture.url}
        alt={sculpture.alt}
      />
    </div>
  );
}

export default App;
