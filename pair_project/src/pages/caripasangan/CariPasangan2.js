import React from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./tes.css";

class Tes extends React.Component {
  componentDidMount() {
    axios
      .get("https://uinames.com/api/?ext&gender=" + this.props.gender)
      .then(response => {
        this.props.ubahListName(response.data);
      });
  }

  render() {
    console.log(this.props.gender);
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div className="isi">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <img src={this.props.listName.photo} style={{ height: "50%" }} />
              <br />
            </div>
            <div className="row justify-content-center">
              <h1 className="name">
                {this.props.listName.name} {this.props.listName.surname}
              </h1>
              <br />
            </div>
            <div
              className="row justify-content-center"
              style={{
                background: "none",
                color: "white"
              }}
            >
              <div className="card-body">
                👤 {this.props.listName.gender}
                <br />
                🌐 {this.props.listName.region}
                <br />
                📞 {this.props.listName.phone}
                <br />
                ✉️ {this.props.listName.email}
                <br />
                🎂 {this.props.listName.age}
                <br />
              </div>
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
)(Tes);
