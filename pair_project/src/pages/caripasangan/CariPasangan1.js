import React from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import "./tes.css";
import male from "./male.png";
import female from "./female.png";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class CariPasangan1 extends React.Component {
  render() {
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div className="container mt-5">
          <h1 style={{ textAlign: "center", fontSize: "55px", color: "white" }}>
            Ayo Pilih Jodohmu
          </h1>
          <div className="row justify-content-center mt-5">
            <div className="col-3 mt-5">
              <Link onClick={() => this.props.ubahMale()} to="/ohjodohku">
                <img
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.3)",
                    borderRadius: "50%"
                  }}
                  src={male}
                />
              </Link>
            </div>
            <div className="col-3 mt-5">
              <Link onClick={() => this.props.ubahFemale()} to="/ohjodohku">
                <img
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.3)",
                    borderRadius: "50%"
                  }}
                  src={female}
                />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "listName, gender, is_login",
  actions
)(CariPasangan1);
