import React from "react";
import axios from "axios";
import tongue from "./good.png";

class YesNo extends React.Component {
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

  changeHandle = e => {
    this.setState({ question: e.target.value });
    this.setState({ pic: "" });
  };

  submitHandle = () => {
    const self = this;
    axios
      .get("https://yesno.wtf/api")
      .then(function(response) {
        self.setState({ pic: response.data.image });
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
        style={{ backgroundColor: "blue", color: "white" }}
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
            <h6>{this.state.questionSubmit}</h6>

            <br />
            <form>
              <div className="form-group">
                <h2>{this.state.question}</h2>
                <img
                  height="300 px"
                  src={this.state.pic}
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

export default YesNo;
