import React from "react";
import objOfDataForCards from "../../data";

console.log("objOfDataForCards", objOfDataForCards);

class PlanCards extends React.Component {
  //pass in prop from
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {}

  render() {
    return (
      <article>
        {this.props.pricePlan == "false" ? "Annually" : "Monthly"}
      </article>
    );
  }
}

export default PlanCards;
