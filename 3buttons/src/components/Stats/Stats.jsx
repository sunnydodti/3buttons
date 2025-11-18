function Stats(props) {
  const { countRed, countGreen, countBlue } = props;

  console.log("countRed", countRed);
  console.log("countGreen", countGreen);
  console.log("countBlue", countBlue);
  return (
    <div>
      <span>Red: {countRed} | </span>
      <span>Green: {countGreen} | </span>
      <span>Blue: {countBlue} | </span>
    </div>
  );
}

export default Stats;
