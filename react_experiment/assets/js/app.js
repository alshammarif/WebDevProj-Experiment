// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./components/welcome.js";
import Quote from "./components/submitQuote.js";

class All extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "Enter Quote!",
    };
  }

  changeQuote(quote) {
    this.setState({quote});
  }

  render() {
    return(
      <div>
        <div class="row">
          <Welcome />
        </div>
        <div class="row">
          <Quote changeQuote={this.changeQuote.bind(this)}
                quote={this.state.quote} />
        </div>
      </div>
    );
  }
}

let app = document.getElementById("app");

$(ReactDOM.render(<All />, app));
