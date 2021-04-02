const InputTextCalc = (props) => {
  return (
    <input
      type="text"
      name="inputValue"
      className="inputText"
      value={props.value}
      onChange={props.handleFunction}
    />
  );
};

export default InputTextCalc;
