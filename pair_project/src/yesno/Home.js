import React from "react";
import axios from "axios";
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
        className="text-center"
        style={{
          backgroundImage: `url(${homebg})`,
          height: "800px",
          width: "100%"
        }}
      >
        <h1
          className="text-white text-center"
          style={{ fontSize: "100px", padding: "240px 0px 0px 0px" }}
        >
          Time Killer
        </h1>
        <h2 className="text-white text-center">The Time Killer App</h2>
        <br />
        <br />
        <Link to="/signin">
          <button type="button" className="btn btn-primary text-center">
            <h3>Sign In Now</h3>
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
