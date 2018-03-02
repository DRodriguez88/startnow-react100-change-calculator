import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountReceived: 0,
      amountDue: 0,
      totalChange: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({ 
      [e.target.name]: e.target.value,
    })
  }

  handleClick(){
    var totalChange = this.state.amountReceived - this.state.amountDue;
    var leftOvers = totalChange;
    var twenties = Math.floor(leftOvers /20);
    leftOvers = leftOvers % 20;
    var tens = Math.floor(leftOvers /10);
    leftOvers = leftOvers % 10;
    var fives = Math.floor(leftOvers /5);
    leftOvers = leftOvers % 5;
    var ones = Math.floor(leftOvers /1);
    leftOvers = leftOvers % 1;
    var quarters = Math.floor(leftOvers /.25);
    leftOvers = leftOvers % .25;
    var dimes = Math.floor(leftOvers /.1);
    leftOvers = leftOvers % .1;
    var nickels = Math.floor(leftOvers /.05);
    leftOvers = leftOvers % .05;
    var pennies = Math.round(leftOvers /.01);
    this.setState({
      totalChange: totalChange,
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
    });
    console.log(this.state)
  }


  render() {
    return (
      <div id="bigMomma" className="container-fluid">
        <div className="p-4">
          <h1 className="text-white">Change Calculator</h1>
          <hr className="border-white"></hr>
        </div>

        <div className="row ml-2 mr-2">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Enter Information
              </div>
              <div className="card-body">
                <p className="font-weight-bold">How much is due?</p>
                <input name="amountDue" defaultValue="0" onChange={this.handleChange} className="form-control"/>
                <p className="font-weight-bold">How much was received?</p>
                <input name="amountReceived" defaultValue="0" onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="card-footer">
                <button onClick={this.handleClick} className="btn btn-primary btn-lg btn-block">Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="alert alert-success text-center">
                  The total change due is ${this.state.totalChange}
                </div>
                <div id="dollarsRow" className="row mb-3">
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Twenties</p>
                      <p id="twenties">{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Tens</p>
                      <p id="tens">{this.state.tens}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Fives</p>
                      <p id="fives">{this.state.fives}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Ones</p>
                      <p id="ones">{this.state.ones}</p>
                    </div>
                  </div>
                </div>
                <div id="coinsRow" className="row">
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                      <p className="mt-3 font-weight-bold">Quarters</p>
                      <p id="quarters">{this.state.quarters}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                      <p className="mt-3 font-weight-bold">Dimes</p>
                      <p id="dimes">{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                      <p className="mt-3 font-weight-bold">Nickels</p>
                      <p id="nickels">{this.state.nickels}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                     <p className="mt-3 font-weight-bold">Pennies</p>
                     <p id="pennies">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
