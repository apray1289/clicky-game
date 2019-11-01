import React, { Component } from "react";

import ImageCard from "./components/Image/image.js";
import mavs from "./imageSelection.json";
import ImageContainer from "./components/ImageContainer/imageContainer.js";

class App extends Component {
  state = {
    mavs,
    refresh: false
  };

  handleButtonPress = () => {
    this.setState({refresh: true})
  };

  shuffle = arr => {
    const newArr = [];
    while (newArr.length !== arr.length) {
      const index = Math.floor(Math.random() * arr.length);
      const randItem = arr[index];
      if (newArr.indexOf(randItem) === -1) {
        newArr.push(randItem);
      }
    }
    return newArr;
  };

  render() {
    const shuffledArray = this.shuffle(this.state.mavs)
    console.log(shuffledArray);
    return (
      <ImageContainer>
        {this.state.mavs.map(mav => (
          <ImageCard onClick={this.handleButtonPress} id={mav.id} key={mav.id} image={mav.image} />
        ))}
      </ImageContainer>
    );
  }
}

export default App;
