import React from "react";

import Gambar from "../component/gambarCat";
import Quotes from "../component/quotesCat";

const divStyle = {
  width: "20rem"
};

class Cats extends React.Component {
  render() {
    return (
      <div className="back">
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-7 cardCat text-center">
              <div class="card card-body" style={divStyle}>
                <Gambar />
                <div class="card-body">
                  <h5 class="card-title">Quotes by Cat</h5>
                  <p class="card-text">
                    <Quotes />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Cats;
