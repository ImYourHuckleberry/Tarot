import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    const { onGetThreeCards} = this.props;
    return (
      <div>
        <button onClick={onGetThreeCards}>
          <img
            style={{ width: "100px" }}
            src="http://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg"
            alt="NewFortune"
          />
        </button>
      </div>
    );
  }
}

export default Button;
