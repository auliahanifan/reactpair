import React from "react";
import axios from "axios";
import tongue from "./good.png";
import { connect } from "unistore/react";
import { actions } from "../../store";

class YesNo extends React.Component {
  //   state = { link: "https://yesno.wtf/api" };
  constructor(props) {
    super(props);
  }

  changeHandle = e => {
    this.props.setQuestion(e.target.value);
    this.props.setPic("");
    // this.setState({ question: e.target.value });
    // this.setState({ pic: "" });
  };

  submitHandle = () => {
    const self = this;
    axios
      .get("https://yesno.wtf/api")
      .then(function(response) {
        self.props.setPic(response.data.image);
        // self.setState({ pic: response.data.image });
        console.log(response.data.image);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //   changeInput = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   postLogin = () => {
  //     const { email, password } = this.state;
  //     const data = {
  //       email: email,
  //       password: password
  //     };
  //     const self = this;

  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "#01A088", color: "white" }}
      >
        <div className="row justify-content-center">
          <div className="col-1 text-right">
            <img width="80px" src={tongue} className="App-logo" alt="logo" />
          </div>
          <div className="col-4 text-center">
            <br />
            <h1>Ask Me Anything!</h1>
            <h4>Yay or Nay Only</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <br />
            <form>
              <div className="form-group">
                <h2>{this.props.question}</h2>
                <img
                  height="300 px"
                  src={this.props.pic}
                  className="App-logo"
                />
                <br />
                <label htmlFor="exampleInputEmail1">Type Your Question</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type your question here"
                  onChange={this.changeHandle}
                />
              </div>
              <h3 className="bg-danger" onClick={() => this.submitHandle()}>
                CLICK IT TO GET ANSWER !
              </h3>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "email, full_name, is_login, pic, question",
  actions
)(YesNo);
