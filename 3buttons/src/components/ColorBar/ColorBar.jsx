import { getBarClassColored, getBarClassSize } from "../../util";
import "./ColorBar.css";
const ColorBar = (props) => {
  const { id, count } = props;

  const progress = (count % 10) * 10;
  const emptySpace = 100 - progress;

  console.log(id, progress, emptySpace);

  const classNameColorBar = getBarClassColored(id);

  const classNameEmptyBarSize = getBarClassSize(emptySpace);
  const classNameFilledBarSize = getBarClassSize(progress);

  return (
    <div className="color-bar">
      <div className={`${classNameEmptyBarSize}`}></div>
      <div className={`${classNameColorBar} ${classNameFilledBarSize}`}></div>
    </div>
  );
};

export default ColorBar;
