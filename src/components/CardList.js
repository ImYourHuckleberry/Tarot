import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {



  render() {
    const { cards } = this.props;
    return (
      <div>
        {cards.map((currentCard, index) => (
          
          <Card 
          key={index} 
          currentCard={currentCard} />
          
        ))}
      </div>
    );
  }
}

export default CardList;
