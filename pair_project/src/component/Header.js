import React from "react";
// import "../assets/main.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
// import { actions } from "../component/store";

function Header(props) {
  if (props.is_login == false) {
    return <div />;
  } else {
    return (
      <header>
        <nav
          class="navbar navbar-dark navbarHitam"
          style={{ backgroundColor: "#000000" }}
        >
          <Link className="navbar-brand" to="/home">
            Time Killer
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <Link className="navbar-brand" to="/home">
                <li class="nav-item">Home</li>
              </Link>
              <Link className="navbar-brand" to="/profile">
                <li class="nav-item">Profile</li>
              </Link>
              <Link
                className="navbar-brand"
                onClick={() => props.setLogin(false)}
              >
                <li class="nav-item">Logout</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(
  "is_login",
  actions
)(Header);
