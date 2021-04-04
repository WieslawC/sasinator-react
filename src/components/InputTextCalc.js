import { Component } from "react";
import "../style/InputTextCalc.scss";

class InputTextCalc extends Component {
  componentDidMount() {
    document.querySelector(".inputText").addEventListener("click", () => {
      document.querySelector(".inputText").classList.add("active");
    });
  }
  render() {
    return (
      <>
        <input
          type="number"
          name="inputValue"
          className="inputText"
          placeholder="---"
          value={this.props.value}
          onChange={this.props.handleFunction}
        />
        <p className="displayText">
          {(this.props.value / 70000000).toFixed(8)} sasin
        </p>
      </>
    );
  }
}

export default InputTextCalc;
