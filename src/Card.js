import React, { Component } from "react";

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
const cardTitle = {
  color: "#695d5c",
  fontWeight: 400,
  fontSize: 14,
};
const cardMainText = {
  fontSize: 32,
  fontWeight: 600,
  margin: "8px 0",
};
const cardFooterText = {
  fontSize: 12,
  fontWeight: 700,
  margin: "8px 0",
};

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, mainText, footerText, color } = this.props;
    return (
      <div style={cardStyle}>
        <div style={cardTitle}>{title}</div>
        <div style={{
            ...cardMainText,
            color: color
        }}>{`+ ${mainText.toLocaleString()}`}</div>
        <div style={cardFooterText}>{`${footerText.toLocaleString()} total`}</div>
      </div>
    );
  }
}

export default Card;
