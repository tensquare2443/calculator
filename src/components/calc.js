import React from 'react';

class Calc extends React.Component {
  render() {
    var action = this.props.action;
    var divClass = "calc-button d-flex align-items-center justify-content-center";
    var multClass = "calc-button d-flex align-items-center justify-content-center";
    var addClass = "calc-button d-flex align-items-center justify-content-center";
    var subClass = "calc-button d-flex align-items-center justify-content-center";

    if (action) {
      if (action === '/') {
        divClass = divClass.concat(' action-button');
      } else if (action === '*') {
        multClass = multClass.concat(' action-button');
      } else if (action === '+') {
        addClass = addClass.concat(' action-button');
      } else if (action === '-') {
        subClass = subClass.concat(' action-button');
      }
    }

    return(
      <div className="calc-content-cont">

        <div className="row no-gutters calc-row calc-screen">
          <div className="col-12 calc-screen-border">
            <div className="calc-screen d-flex align-items-center justify-content-end">
              {this.props.screenVal}
            </div>
          </div>
        </div>

        <div className="row no-gutters calc-row">
          <div className="col-9 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="clear" className="calc-button d-flex align-items-center justify-content-center">CLEAR</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="/" className={divClass}>&divide;</div>
          </div>
        </div>

        <div className="row no-gutters calc-row">
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="7" className="calc-button d-flex align-items-center justify-content-center">7</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="8" className="calc-button d-flex align-items-center justify-content-center">8</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="9" className="calc-button d-flex align-items-center justify-content-center">9</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="*" className={multClass}>&times;</div>
          </div>
        </div>

        <div className="row no-gutters calc-row">
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="4" className="calc-button d-flex align-items-center justify-content-center">4</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="5" className="calc-button d-flex align-items-center justify-content-center">5</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="6" className="calc-button d-flex align-items-center justify-content-center">6</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="-" className={subClass}>-</div>
          </div>
        </div>

        <div className="row no-gutters calc-row">
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="1" className="calc-button d-flex align-items-center justify-content-center">1</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="2" className="calc-button d-flex align-items-center justify-content-center">2</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="3" className="calc-button d-flex align-items-center justify-content-center">3</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="+" className={addClass}>+</div>
          </div>
        </div>

        <div className="row no-gutters calc-row">
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="." className="calc-button d-flex align-items-center justify-content-center">.</div>
          </div>
          <div className="col-3 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="0" className="calc-button d-flex align-items-center justify-content-center">0</div>
          </div>
          <div className="col-6 calc-border">
            <div onClick={this.props.press.bind(this)} data-id="enter" className="calc-button d-flex align-items-center justify-content-center">ENTER</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Calc;
