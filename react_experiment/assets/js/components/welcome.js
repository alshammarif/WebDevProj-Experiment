import React from "react";

export default class Welcome extends React.Component {
  const title = "Welcome to Our Experiment!";
  const subtitle = "nothing exciting really!";

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <h2> {subtitle}</h2>
      </div>
    );
  }

}
