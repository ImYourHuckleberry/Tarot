import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    const { currentCard } = this.props;

    if (currentCard.flipped === true) {
      
      return (
         <div style={{display:"inline-grid", margin:"20px"}}>
          <img
            style={{ width: "100px" }}
            src={currentCard.image}
            alt={currentCard.name}
            class="img-hor-vert"
          />
          <center> {currentCard.inverse}</center>
        </div>
      );
    } else {
      return (
        <div style={{display:"inline-grid", margin:"20px"}}>
          <img
            style={{ width: "100px" }}
            src={currentCard.image}
            alt={currentCard.name}
          />
          <center> {currentCard.description}</center>
        </div>
      );
    }
  }
}

export default Card;
