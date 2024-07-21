import React from "react";

const Banner = () => {
  return (
    <div className="p-4 p-lg-5 bg-light rounded-3 text-center mb-4">
      <div className="m-4 m-lg-5 text-start">
        <h1 className="display-5 fw-bold">A warm welcome!</h1>
        <p className="fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt
          eos dignissimos aspernatur. Officia enim vitae placeat itaque ullam
          quaerat molestiae voluptates aperiam est ratione, autem tempora, totam
          sit omnis?
        </p>
        <a className="btn btn-primary btn-lg" href="#!">
          Call to action
        </a>
      </div>
    </div>
  );
};

export default Banner;
