import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {

    const cardPlacement = ["past", "present", "future"]
    const { currentCard } = this.props;
    const customHandleClick=()=>{window.open(`${currentCard.url}`)}
    

    if (currentCard.flipped === true) {
      return (
        <div style={{ display: "inline-grid", margin: "20px" }}>
          <button onClick={customHandleClick}>
          
            <img
              style={{ width: "100px" }}
              src={currentCard.image}
              alt={currentCard.name}
              class="img-hor-vert"
            />
          </button>
          <center> {currentCard.inverse}</center>
        </div>
      );
    } else {
      return (
        <div style={{ display: "inline-grid", margin: "20px" }}>
          <button onClick={customHandleClick}>
            <img
              style={{ width: "100px" }}
              src={currentCard.image}
              alt={currentCard.name}
            />
          </button>
          <center> {currentCard.description}</center>
        </div>
      );
    }
  }
}

export default Card;
