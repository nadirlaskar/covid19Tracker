import React, { Component } from "react";

/**
 * Styles used by card component
 * using inline styles
 */
const cardStyle = {
  minWidth: 250,
  display: "inline-block",
  padding: 16,
  border: "1px solid #eee",
  margin: 16,
  cursor: "pointer",
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 0 8px -4px rgba(0,0,0, 0.5)",
};
const cardTitleStyle = {
  color: "#695d5c",
  fontWeight: 400,
  fontSize: 14,
};
const cardMainTextStyle = {
  fontSize: 32,
  fontWeight: 600,
  margin: "8px 0",
};
const cardFooterTextStyle = {
  fontSize: 12,
  fontWeight: 700,
  margin: "8px 0",
};

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
      <div style={cardStyle}>
        <div style={cardTitleStyle}>{title}</div>
        <div style={{
            ...cardMainTextStyle,
            color: color
        }}>{`+ ${mainText.toLocaleString()}`}</div>
        <div style={cardFooterTextStyle}>{`${footerText.toLocaleString()} total`}</div>
      </div>
    );
  }
}

export default Card;
