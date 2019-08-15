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
          <a class="navbar-brand" href="#">
            Time Killer
          </a>
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <Link onClick={() => props.setLogin(false)}>Logout</Link>
              </li>
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
