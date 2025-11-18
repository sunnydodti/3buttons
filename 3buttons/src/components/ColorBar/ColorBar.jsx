import { getColorClass, getVerticalBarClassSize } from "../../util";
import "./ColorBar.css";
const ColorBar = (props) => {
  const { id, count } = props;

  const progress = (count % 10) * 10;
  const emptySpace = 100 - progress;

  const classNameColorBar = getColorClass(id);

  const classNameEmptyBarSize = getVerticalBarClassSize(emptySpace);
  const classNameFilledBarSize = getVerticalBarClassSize(progress);

  return (
    <div className="color-bar">
      <div className={`${classNameEmptyBarSize}`}></div>
      <div className={`${classNameColorBar} ${classNameFilledBarSize}`}></div>
    </div>
  );
};

export default ColorBar;
