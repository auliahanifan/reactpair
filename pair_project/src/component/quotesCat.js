import React from "react";
import axios from "axios";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get("https://api.quotable.io/random")
      .then(function(response) {
        self.setState({ data: response.data });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
  }

  render() {
    return <div>"{this.state.data.content} Meoow."</div>;
  }
}

export default Quotes;
