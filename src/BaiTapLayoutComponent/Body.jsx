import React from "react";
import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <div className="container py-5">
      <Banner />
      <div className="row">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Body;
