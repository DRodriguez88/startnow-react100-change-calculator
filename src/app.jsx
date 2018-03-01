import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
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
                <input id="due" className="form-control"/>
                <p className="font-weight-bold">How much was received?</p>
                <input id="received" className="form-control"/>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-lg btn-block">Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="alert alert-success text-center">
                  The total change due is a gillion dollhairs
                </div>
                <div id="dollarsRow" className="row mb-3">
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Twenties</p>
                      <p id="twenties">0</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Tens</p>
                      <p id="tens">0</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Fives</p>
                      <p id="fives">0</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center">
                      <p className="mt-3 font-weight-bold">Ones</p>
                      <p id="ones">0</p>
                    </div>
                  </div>
                </div>
                <div id="coinsRow" className="row">
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                      <p className="mt-3 font-weight-bold">Quarters</p>
                      <p id="quarters">0</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                      <p className="mt-3 font-weight-bold">Dimes</p>
                      <p id="dimes">0</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                      <p className="mt-3 font-weight-bold">Nickels</p>
                      <p id="nickels">0</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg-light text-center w-100">
                     <p className="mt-3 font-weight-bold">Pennies</p>
                     <p id="pennies">0</p>
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
