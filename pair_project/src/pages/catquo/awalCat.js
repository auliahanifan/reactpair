import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

import Gambar from "../../component/gambarCat";
import Quotes from "../../component/quotesCat";

const divStyle = {
  width: "20rem"
};

class awalCats extends React.Component {
  render() {
    return (
      <div className="backCol">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-10 text-center">
              <h2>Ayo dengar Quotes dari kucing yang bijak</h2>
              <br />
              <Link to="/cats">
                <a href="#" class="btn text-center btn-primary">
                  Let's Go
                </a>
              </Link>
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

export default awalCats;
