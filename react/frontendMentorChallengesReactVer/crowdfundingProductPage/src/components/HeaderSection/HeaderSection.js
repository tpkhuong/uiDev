import React from "react";

//importing HeaderSection: use destructuring since we are not exporting using default keyword
//import {HeaderSection}

export class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return <header>{children}</header>;
  }
}
