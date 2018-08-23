import React, { Component } from "react";

class ShuffleButton extends Component {
  state = {};
  render() {
    const { onShuffle } = this.props;
    return (
      <div>
        <button onClick={onShuffle}>Shuffle</button>
      </div>
    );
  }
}

export default ShuffleButton;
