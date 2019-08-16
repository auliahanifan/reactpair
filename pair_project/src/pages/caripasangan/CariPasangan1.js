import React from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import "./tes.css";
import male from "./male.png";
import female from "./female.png";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class CariPasangan1 extends React.Component {
  changeHandle = e => {
    // e.preventDefault()
    this.props.ubahName(e.target.value);
  };

  submitHandleF = () => {
    this.props.ubahMale();
    this.props.history.push(`/ohjodohku/female/${this.props.name}`);
  };

  submitHandleM = () => {
    this.props.ubahFemale();
    this.props.history.push(`/ohjodohku/male/${this.props.name}`);
  };

  render() {
    if (this.props.is_login === false) {
      console.log("status is login", this.props.is_login);
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div className="backCol">
          <div className="container-fluid">
            <h1
              className="animated zoomIn"
              style={{ textAlign: "center", fontSize: "55px", color: "white" }}
            >
              Ayo Cari Jodohmu
            </h1>
            <div className="row justify-content-center ">
              <div className="col-2 col-6">
                <form className="animated jackInTheBox">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Type yourname"
                      onChange={this.changeHandle}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xs-6 col-3">
                <Link>
                  <img
                    onClick={() => this.submitHandleM()}
                    className="animated fadeInLeft"
                    style={{
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.3)",
                      borderRadius: "50%"
                    }}
                    src={male}
                  />
                </Link>
                <br />
                <br />
                <h1
                  className="animated bounceIn"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Male
                </h1>
              </div>
              <div className="col-xs-6 col-3">
                <Link>
                  <img
                    onClick={() => this.submitHandleF()}
                    className="animated fadeInRight"
                    style={{
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.3)",
                      borderRadius: "50%"
                    }}
                    src={female}
                  />
                </Link>
                <br />
                <br />
                <h1
                  className="animated bounceIn"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Female
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "listName, gender, is_login, name",
  actions
)(CariPasangan1);
