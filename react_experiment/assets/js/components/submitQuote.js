import React from "react";

import Qwords from "./Qwords";

export default class Quote extends React.Component {

  handleChange(e) {
    const quote = e.target.value;
    this.props.changeQuote(quote)
  }
  render() {
    const label = "Enter Quote here:";
    return(
      <div>
        <h5>{label}</h5>
        <input onChange={this.handleChange.bind(this)}/>
        <br />
        <Qwords quote={this.props.quote}/>
      </div>
    );
  }
}
