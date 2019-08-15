import React from "react";
import axios from "axios";
import loginbg from "./loginbg.jpg";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
// import { store } from "../store";
import { connect } from "unistore/react";
import { actions } from "../../store";

class SignIn extends React.Component {
  //   state = { link: "https://yesno.wtf/api" };
  constructor(props) {
    super(props);
  }

  postLogin = () => {
    console.log("berhasil");
    const self = this;
    axios
      .post("https://api-todofancy.herokuapp.com/api/auth")
      .then(function(response) {
        console.log(self.props.is_login);
        console.log(response.data);
        self.props.setLogin(true);
        console.log(self.props.is_login);
      })
      .catch(function(error) {
        console.log(error);
      });
    self.props.history.push("/home");
  };

  render() {
    return (
      <div
        className="text-center container-fluid"
        style={{
          // backgroundImage: `url(${loginbg})`,
          backgroundColor: "#1D1775",
          height: "800px",
          width: "100%"
        }}
      >
        <div className="row justify-content-center">
          <div className="col-6 text-white">
            <div>
              <form style={{ padding: "200px 0px 0px 0px" }}>
                <div className="form-group">
                  <h2>Log In Form</h2>
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <div style={{ paddingLeft: "135px" }}>
                    <input
                      style={{ width: "350px" }}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <div style={{ paddingLeft: "135px" }}>
                    <input
                      style={{ width: "350px" }}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.postLogin()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "email, full_name, is_login",
  actions
)(withRouter(SignIn));
