import React from "react";

const Item = () => {
  return (
    <div className="col-3">
      <div className="card text-center">
        <div className="card-header">
          <img
            src="https://picsum.photos/500/325"
            alt="..."
            className="img-fluid"
          />
        </div>
        <div className="card-body">
          <h3>Card title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            dolorem iusto vel!
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
