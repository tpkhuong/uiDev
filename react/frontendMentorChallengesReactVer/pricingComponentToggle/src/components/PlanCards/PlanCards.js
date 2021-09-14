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
      // we applied gap on article since article is a grid container
      // using gap we will have space vertical at mobile and horizontal at desktop

      <article className="plan-cards-container">
        {objOfDataForCards[planCard].map(
          (
            { plan, price, capacity, usersAllowed, uploadSize, link },
            index
          ) => {
            const randomNumber = Math.random();
            return (
              // middle-element-margin-padding-block only has padding for middle div element to have the effect of the middle element being taller than
              //left and right element.
              <div
                key={randomNumber}
                className={`plan-card bg-${index == 1 ? "dark" : "light"}${
                  index == 1 ? " middle-element-margin-padding-block" : ""
                }`}
              >
                {/* name */}
                <span className="plan-card__plan-name">{plan}</span>
                {/* price wrapper */}
                <span
                  classname={`plan-card__price-wrapper${
                    index !== 1 ? " dark-shade" : ""
                  }`}
                >
                  {/* dollar sign */}
                  <span className="plan-card__price-wrapper__price-sign medium-font">
                    $
                  </span>
                  {/* price */}
                  <span className="plan-card__price-wrapper__price large-font">
                    {price}
                  </span>
                </span>
                {/* storage */}
                <span className="plan-card__storage">{capacity}</span>
                {/* users */}
                <span className="plan-card__users">{usersAllowed}</span>
                {/* upload */}
                <span className="plan-card__upload">{uploadSize}</span>
                {/* button */}
                <a
                  className={`plan-card__btn btn-${
                    index == 1 ? "light" : "dark"
                  }`}
                  href=""
                >
                  {index == 1 ? "Click Me" : link}
                </a>
              </div>
            );
          }
        )}
      </article>
    );
  }
}

export default PlanCards;
