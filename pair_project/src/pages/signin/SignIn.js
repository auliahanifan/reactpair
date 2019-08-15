import React from "react";
import axios from "axios";
import loginbg from "./loginbg.jpg";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
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
        className="text-center container-fluid"
        style={{
          backgroundImage: `url(${loginbg})`,
          height: "800px",
          width: "100%"
        }}
      >
        <div className="row justify-content-center">
          <div className="col-6 text-white">
            <form style={{ padding: "200px 0px 0px 0px" }}>
              <div class="form-group">
                <h2>Log In Form</h2>
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => this.postLogin()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
