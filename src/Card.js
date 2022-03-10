import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-capitalize">
              {props.title}
            </h5>
            <p class="card-text py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu cursus orci. Aenean egestas augue nunc, nec efficitur ante rutrum at. Fusce ut bibendum quam, tincidunt scelerisque
            </p>
            <a href="#" class="btn btn-outline-primary">
              Check Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

