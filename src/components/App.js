import "../style/App.scss";
import { Component } from "react";
import InputTextCalc from "./InputTextCalc.js";

class App extends Component {
  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  state = {
    inputValue: "",
  };
  render() {
    return (
      <div className="wrapper">
        <div className="containerCenter">
          <h1>SASINATOR</h1>
          <p className="description">
            Przelicznik dowolnej kwoty na sasiny - jednostkę prezentującą jak
            bardzo dana wartość zostanie zmarnowana na coś, co sie i tak nie
            odbędzie
          </p>
          <InputTextCalc
            value={this.state.inputValue}
            handleFunction={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
