import React, { Component } from "react";
import ReactHooks from "./Index.js";

class ReactOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  render() {
    return (
      <div>
        <ReactHooks count={this.state.counter} />
        <h1>react {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
export default ReactOld;
