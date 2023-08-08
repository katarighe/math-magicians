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
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>+</button>
            </div>
            <div className="buttons">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>-</button>
            </div>
            <div className="buttons">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>*</button>
            </div>
            <div className="buttons">
              <button>0</button>
              <button>.</button>
              <button>C</button>
              <button>/</button>
            </div>
          </div>
        );
      };
}