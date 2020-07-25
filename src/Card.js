import React, { Component } from "react";
import "./Card.css";

// Card component extended from class Component of react
class Card extends Component {
  // Constructor is not used and can be removed
  // it can be used to set some initial state
  constructor(props) {
    super(props);
  }
  // return a HTML for reactDOM to render
  render() {
    // Extarct the value from the props using destructors
    const { title, mainText, footerText, color } = this.props;
    // return the HTML snippet, inject values from received from props
    // and apply styles to style the card
    return (
      <div className="card">
        <div className="title">{title}</div>
        <div className="main-text" style={{ color: color }}>{`+ ${mainText.toLocaleString()}`}</div>
        <div className="footer-text">{`${footerText.toLocaleString()} total`}</div>
      </div>
    );
  }
}

export default Card;
