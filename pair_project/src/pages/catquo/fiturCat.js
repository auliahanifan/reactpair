import React from "react";
import "./main.css";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Gambar from "../../component/gambarCat";
import Quotes from "../../component/quotesCat";
import CustomInput from "../coba";

const divStyle = {
  width: "20rem"
};

class Cats extends React.Component {
  render() {
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div className="backCol">
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-md-5 text-center">
                <table width="100%">
                  <tr>
                    <td align="center">
                      <div class="card card-body" style={divStyle}>
                        <Gambar />
                        <div class="card-body">
                          <h5 class="card-title">Quotes by Cat</h5>
                          <p class="card-text">
                            <Quotes />
                          </p>
                          <div class="card-body">
                            <Link to="/awalcats" class="text-center">
                              Coba lagi
                            </Link>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "email, full_name, is_login, pic, question",
  actions
)(Cats);
