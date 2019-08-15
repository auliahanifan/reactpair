import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import { store } from "./store";
import { connect } from "unistore/react";
import { actions } from "./store";
import YesNo from "./pages/yesno/YesNo";
import SignIn from "./pages/signin/SignIn";
import CariJodoh from "./pages/caripasangan/CariPasangan1";
import OhJodohKu from "./pages/caripasangan/CariPasangan2";

// import { Redirect } from 'react-router-dom';

// const is_login = JSON.parse(localStorage.getItem('is_login'));

class MainRoute extends React.Component {
  postSignOut = () => {
    // const self = this;
    console.log(this.props.is_login);
    this.props.setLogin(false);
    console.log(this.props.is_login);
    // localStorage.setItem('is_login', null);

    // return <Redirect to={{ pathname: '/' }} />;
    // self.props.history.push('/');
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/yesno" component={YesNo} />
          <Route path="/carijodoh" component={CariJodoh} />
          <Route path="/ohjodohku" component={OhJodohKu} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
