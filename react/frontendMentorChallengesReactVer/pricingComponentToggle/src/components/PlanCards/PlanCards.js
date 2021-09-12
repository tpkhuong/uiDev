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
    const { pricePlan } = this.props;
    const planCard = pricePlan == "false" ? "annually" : "monthly";
    return (
      <article>
        {objOfDataForCards[planCard].map((obj, index) => {
          const randomNumber = Math.random();
          return (
            <div
              key={randomNumber}
              className={`plan-card ${index == 1 ? "hello" : "there"} ${
                index == 1 ? "word" : "Let's GOOOOO!!!"
              }`}
            >
              {/* name */}
              <span>{obj.price}</span>
              {/* price wrapper */}
              <span>
                {/* dollar sign */}
                <span></span>
                {/* price */}
                <span></span>
              </span>
              {/* storage */}
              <span></span>
              {/* users */}
              <span></span>
              {/* upload */}
              <span></span>
              {/* button */}
              <a href=""></a>
            </div>
          );
        })}
      </article>
    );
  }
}

export default PlanCards;
