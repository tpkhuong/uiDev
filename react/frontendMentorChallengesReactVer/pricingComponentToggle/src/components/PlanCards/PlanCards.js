import React from "react";
import objOfDataForCards from "../../data";

console.log("objOfDataForCards", objOfDataForCards);
alert("enter data next. Let's GOOOOO!!!");
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
      <article className="plan-cards-container">
        {objOfDataForCards[planCard].map(
          (
            { plan, price, capacity, usersAllowed, uploadSize, link },
            index
          ) => {
            const randomNumber = Math.random();
            return (
              <div
                key={randomNumber}
                className={`plan-card bg-${index == 1 ? "dark" : "light"}${
                  index == 1 ? " middle-element-margin-padding-block" : ""
                }`}
              >
                {/* name */}
                <span className="plan-card__plan-name"></span>
                {/* price wrapper */}
                <span
                  classname={`plan-card__price-wrapper${
                    index !== 1 ? " dark-shade" : ""
                  }`}
                >
                  {/* dollar sign */}
                  <span className="plan-card__price-wrapper__price-sign medium-font"></span>
                  {/* price */}
                  <span className="plan-card__price-wrapper__price large-font"></span>
                </span>
                {/* storage */}
                <span className="plan-card__storage"></span>
                {/* users */}
                <span className="plan-card__users"></span>
                {/* upload */}
                <span className="plan-card__upload"></span>
                {/* button */}
                <a
                  className={`plan-card__btn btn-${
                    index == 1 ? "light" : "dark"
                  }`}
                  href=""
                ></a>
              </div>
            );
          }
        )}
      </article>
    );
  }
}

export default PlanCards;
