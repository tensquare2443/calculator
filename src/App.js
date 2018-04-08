import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calc from './components/calc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenVal: '0',
      calcString: '',
      action: false,
      valsArr: [false, false, false]
    };
  }

  press = (e) => {
    var pressed = e.currentTarget.dataset.id;
    var screenVal = this.state.screenVal;
    var action = this.state.action;
    var valsArr = this.state.valsArr.slice();

    if (pressed === 'colorChange') {
      return alert('colorchange');
    }

    if (pressed === 'clear') {
      valsArr = [false, false, false];
      action = false;
      screenVal = '0';

      this.setState({valsArr});
      this.setState({action});
      this.setState({screenVal});
    } else if (pressed === 'enter') {

      if (valsArr[2]) {

        if (valsArr[1] === '/') {
          valsArr[0] = ((valsArr[0]/1) / (valsArr[2]/1)).toString();
        } else if (valsArr[1] === '*') {
          valsArr[0] = ((valsArr[0]/1) * (valsArr[2]/1)).toString();
        } else if (valsArr[1] === '-') {
          valsArr[0] = ((valsArr[0]/1) - (valsArr[2]/1)).toString();
        } else if (valsArr[1] === '+') {
          valsArr[0] = ((valsArr[0]/1) + (valsArr[2]/1)).toString();
        }

        screenVal = valsArr[0];
        valsArr[1] = false;
        valsArr[2] = false;

      } else if (valsArr[1]) {
        valsArr[1] = false;
        action = false;
        screenVal = valsArr[0];
      } else return;

      this.setState({valsArr});
      this.setState({action});
      this.setState({screenVal});
    } else if (pressed === '/' || pressed === '*' || pressed === '-' || pressed === '+') {

      if (valsArr[2]) {

        if (valsArr[1] === '/') {
          valsArr[0] = ((valsArr[0]/1) / (valsArr[2]/1)).toString();
        } else if (valsArr[1] === '*') {
          valsArr[0] = ((valsArr[0]/1) * (valsArr[2]/1)).toString();
        } else if (valsArr[1] === '-') {
          valsArr[0] = ((valsArr[0]/1) - (valsArr[2]/1)).toString();
        } else if (valsArr[1] === '+') {
          valsArr[0] = ((valsArr[0]/1) + (valsArr[2]/1)).toString();
        }

        valsArr[1] = pressed;
        valsArr[2] = false;
        action = pressed;
        screenVal = valsArr[0];

      } else if (valsArr[1] || valsArr[0]) {
        valsArr[1] = pressed;
        action = pressed;
      }

      this.setState({valsArr});
      this.setState({action});
      this.setState({screenVal});
    } else if (pressed === '.') {

      if (valsArr[2]) {
        if (valsArr[2].includes('.')) {
          return;
        } else {
          valsArr[2] = valsArr[2].concat('.');
          screenVal = valsArr[2];
        }
      } else if (valsArr[1]) {
        valsArr[2] = '0.';
        action = false;
        screenVal = valsArr[2];
      } else if (valsArr[0]) {
        // alert(typeof valsArr[0]);
        if (valsArr[0].includes('.')) {
          return;
        } else {
          valsArr[0] = valsArr[0].concat('.');
          screenVal = valsArr[0];
        }
      } else {
        valsArr[0] = '0.';
        screenVal = valsArr[0];
      }

      this.setState({valsArr});
      this.setState({action});
      this.setState({screenVal});
    } else {

      if (valsArr[2]) {
        if (valsArr[2] === '0') {
          valsArr[2] = pressed;
        } else {
          valsArr[2] = valsArr[2].concat(pressed);
        }

        screenVal = valsArr[2];
      } else if (valsArr[1]) {
        valsArr[2] = pressed;
        screenVal = valsArr[2];
        action = false;
      } else if (valsArr[0]) {
        valsArr[0] = valsArr[0].concat(pressed);
        screenVal = valsArr[0];
      } else {
        valsArr[0] = pressed;
        screenVal = valsArr[0];
      }

      this.setState({valsArr});
      this.setState({action});
      this.setState({screenVal});
    }

  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid d-none d-md-block mt-2 p-0" style={{width: "400px", height: "600px"}}>
          <Calc screenVal={this.state.screenVal} action={this.state.action} press={this.press}/>
        </div>
        <div className="container-fluid d-none d-sm-block d-md-none mt-2 p-0" style={{width: "300px", height: "450px"}}>
          <Calc screenVal={this.state.screenVal} action={this.state.action} press={this.press}/>
        </div>
        <div className="container-fluid d-sm-none mt-2 p-0" style={{width: "200px", height: "300px"}}>
          <Calc screenVal={this.state.screenVal} action={this.state.action} press={this.press}/>
        </div>
      </div>
    );
  }
}

export default App;
