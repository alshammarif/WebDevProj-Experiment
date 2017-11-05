import React from "react";

export default class QWords extends React.Component {
  render() {
    const nquotes = this.state.quotes;
    quote = this.props.quote;
    nquotes.push(quote);

    this.setState({quotes});

    const lquote = nquotes.map((quote) =>
      <li>{quote}</li>
    )

    return(
      <ul>
      {lquote}
      </ul>
    );
  }

}
