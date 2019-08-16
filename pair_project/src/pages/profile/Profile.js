import React from "react";
import { Link } from "react-router-dom";
import profile from "./profile.jpg";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
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
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div
          className="text-center"
          style={{
            // backgroundImage: `url(${homebg})`,
            backgroundColor: "#28209e",
            height: "800px",
            width: "100%"
          }}
        >
          <img
            src={profile}
            style={{ padding: "100px 0px 0px 0px", borderRadius: "50%" }}
            height="400px"
          />
          <h1
            className="text-white text-center animated fadeInDown"
            style={{
              fontSize: "50px",
              fontFamily: '"EB Garamond", serif'
            }}
          >
            Alterra Academia
          </h1>
          <h2
            className="text-white animated fadeInRight text-center"
            style={{ fontFamily: '"EB Garamond", serif' }}
          >
            academy@alterra.id
          </h2>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default connect(
  "is_login",
  actions
)(Profile);
