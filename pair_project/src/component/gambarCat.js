import React from "react";
import axios from "axios";
import "../assets/css/main.css";

const divStyle = {
  width: "17rem"
};

class Gambar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      img: ""
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then(function(response) {
        self.setState({ img: response.data[0].url });
        console.log(response.data[0].url);
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
  }

  render() {
    // console.log(this.state.data.url);
    return (
      <div>
        <div class="media kucing borderMov img-thumbnail" style={divStyle}>
          <img
            src={this.state.img}
            style={divStyle}
            class="align-self-start mr-3"
            alt="..."
          />
          <div class="media-body" />
        </div>
      </div>
    );
  }
}

export default Gambar;
