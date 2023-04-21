import React, { useState } from "react";

export default class User extends React.Component {
  constructor() {
    super();
    console.log("constructor called");
  }

  render() {
    console.log("render called", this.props.name);
    return (
      <div>
        <h2>User.js {this.props.name}</h2>
      </div>
    );
  }
}
