import "../style/InputTextCalc.scss";

const InputTextCalc = (props) => {
  return (
    <>
      <input
        type="number"
        name="inputValue"
        className="inputText"
        value={props.value}
        onChange={props.handleFunction}
      />
      <p className="displayText">{(props.value / 70000000).toFixed(8)} sasin</p>
    </>
  );
};

export default InputTextCalc;
