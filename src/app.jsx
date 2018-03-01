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
                <div id="dollarsRow" className="row">
                  <div className="col-3">
                    <div id="twenties" className="card bg-light text-center w-100">
                      20
                    </div>
                  </div>
                  <div className="col-3">
                    <div id="tens" className="card bg-light text-center">
                      10
                    </div>
                  </div>
                  <div className="col-3">
                    <div id="fives" className="card bg-light text-center">
                      5
                    </div>
                  </div>
                  <div className="col-3">
                    <div id="ones" className="card bg-light text-center">
                      1
                    </div>
                  </div>
                </div>
                <div id="coinsRow" className="row">
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
