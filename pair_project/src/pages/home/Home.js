import React from "react";
// import axios from "axios";
import homebg from "./homebg.jpg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  //   state = { link: "https://yesno.wtf/api" };
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      questionSubmit: "",
      pic: ""
      //   this.filterCountrySingle = this.filterCountrySingle.bind(this);
    };
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "#34383a", color: "white" }}
      >
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1
              className="text-white text-center animated fadeInDown"
              style={{
                fontSize: "100px",
                padding: "240px 0px 0px 0px",
                fontFamily: '"EB Garamond", serif'
              }}
            >
              Time Killer
            </h1>
            <h2
              className="text-white animated fadeInRight text-center"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              Made From Love to Kill Your Time
            </h2>
            <br />
            <br />
            <Link to="/signin">
              <button
                type="button"
                className="btn animated fadeInLeft btn-primary text-center"
              >
                <h3
                  className="animated zoomIn"
                  style={{ fontFamily: '"EB Garamond", serif' }}
                >
                  Sign In Now
                </h3>
              </button>
            </Link>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
