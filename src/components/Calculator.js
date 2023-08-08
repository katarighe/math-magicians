import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="screen">
          <span>0</span>
        </div>
        <div className="buttons">
          <button type="button" value="clear">AC</button>
          <button type="button" value="pos-neg">+/-</button>
          <button type="button" value="%">%</button>
          <button type="button" value="/">÷</button>
          <button type="button" value="7">7</button>
          <button type="button" value="8">8</button>
          <button type="button" value="9">9</button>
          <button type="button" value="+">+</button>
        </div>
        <div className="buttons">
          <button type="button" value="4">4</button>
          <button type="button" value="5">5</button>
          <button type="button" value="6">6</button>
          <button type="button" value="-">-</button>
        </div>
        <div className="buttons">
          <button type="button" value="1">1</button>
          <button type="button" value="2">2</button>
          <button type="button" value="3">3</button>
          <button type="button" value="*">*</button>
        </div>
        <div className="buttons">
          <button type="button" value="0">0</button>
          <button type="button" value=".">.</button>
          <button type="button" value="C">C</button>
          <button type="button" value="/">/</button>
        </div>
      </div>
    );
  }
}
