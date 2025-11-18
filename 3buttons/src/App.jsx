import { useState } from "react";
import "./App.css";
import ClickerButton from "./components/ClickerButton/ClickerButton";
import Stats from "./components/Stats/Stats";
import ColorBar from "./components/ColorBar/ColorBar";

function App() {
  const [countRed, setcountRed] = useState(0);
  const [countGreen, setcountGreen] = useState(0);
  const [countBlue, setcountBlue] = useState(0);

  return (
    <div className="main-container">
      <Stats
        countRed={getStat(countRed)}
        countGreen={getStat(countGreen)}
        countBlue={getStat(countBlue)}
      />

      <div className="bar-row">
        <ColorBar id="red" count={countRed}></ColorBar>
        <ColorBar id="green" count={countGreen}></ColorBar>
        <ColorBar id="blue" count={countBlue}></ColorBar>
      </div>

      <div className="button-row">
        <ClickerButton
          id="red"
          onClick={() => setcountRed(increment)}
        ></ClickerButton>
        <ClickerButton
          id="green"
          onClick={() => setcountGreen(increment)}
        ></ClickerButton>
        <ClickerButton
          id="blue"
          onClick={() => setcountBlue(increment)}
        ></ClickerButton>
      </div>
    </div>
  );
}

function increment(previous) {
  return previous + 1;
}

function getStat(count) {
  return Math.floor(count / 10);
  // return count;
}
export default App;
