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
import Header from "./component/Header";
import Home1 from "./pages/Home1/Home";
import Cats from "./pages/catquo/fiturCat";
import awalCats from "./pages/catquo/awalCat";
import Profile from "./pages/profile/Profile";
import CustomInput from "./pages/coba";
import { Redirect } from "react-router-dom";

// import { Redirect } from 'react-router-dom';

// const is_login = JSON.parse(localStorage.getItem('is_login'));

class MainRoute extends React.Component {
  // postSignOut = () => {
  //   // const self = this;
  //   console.log(this.props.is_login);
  //   this.props.setLogin(false);
  //   console.log(this.props.is_login);
  // localStorage.setItem('is_login', null);

  // return <Redirect to={{ pathname: '/' }} />;
  // self.props.history.push('/');
  // };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home1} />
          <Route path="/signin" component={SignIn} />
          <Route path="/yesno" component={YesNo} />
          <Route path="/carijodoh" component={CariJodoh} />
          <Route path="/ohjodohku" component={OhJodohKu} />
          <Route path="/cats" component={Cats} />
          <Route path="/awalcats" component={awalCats} />
          <Route path="/profile" component={Profile} />
          <Route path="/input" component={CustomInput} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
