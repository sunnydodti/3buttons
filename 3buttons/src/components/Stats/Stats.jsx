import { getColorClass } from "../../util";
import "./Stats.css";

function Stats(props) {
  const { countRed, countGreen, countBlue } = props;
  const total = countRed + countGreen + countBlue;

  const redPercent = getPercent(total, countRed);
  const greenPercent = getPercent(total, countGreen);
  const bluePercent = getPercent(total, countBlue);

  console.log("redPercent", redPercent);
  console.log("greenPercent", greenPercent);
  console.log("bluePercent", bluePercent);
  console.log("total", total);

  return (
    <div>
      <div className="stats-metrics">
        <span>Red: {countRed} | </span>
        <span>Green: {countGreen} | </span>
        <span>Blue: {countBlue} | </span>
      </div>

      <div className="stats-bar">
        <div
          className={`${getColorClass("red")}`}
          style={getStyle(redPercent)}
        ></div>
        <div
          className={`${getColorClass("green")}`}
          style={getStyle(greenPercent)}
        ></div>
        <div
          className={`${getColorClass("blue")}`}
          style={getStyle(bluePercent)}
        ></div>
      </div>
    </div>
  );
}

function getPercent(total, value) {
  const percent = ((value / total) * 100) / 10;
  return percent * 10;
}

function getStyle(percentage) {
  return {
    width: `${percentage}%`,
  };
}
export default Stats;
