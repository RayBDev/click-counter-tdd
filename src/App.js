import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    error: false
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1, error: false });
  };

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1, error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div data-test="error-message">Can't decrement below zero</div>
      );
    }
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={() => this.incrementCounter()}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => this.decrementCounter()}
        >
          Decrement counter
        </button>
        {errorMessage}
      </div>
    );
  }
}

export default App;
