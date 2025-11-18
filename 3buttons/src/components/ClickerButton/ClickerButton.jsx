import { getButtonClass } from "../../util";

import "./ClickerButton.css";
const ClickerButton = (props) => {
  const { id, onClick } = props;

  const className = getButtonClass(id);

  return (
    <button onClick={onClick} className={className}>
      Click Me
    </button>
  );
};

export default ClickerButton;
