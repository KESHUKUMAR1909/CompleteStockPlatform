import React from "react";
import Left from "./Left.js";
import Right from "./Right.js";

const Home = () => {
  return (
    <div className="container m-0">
      <div className="row">
        <div className="col-4">
          <Left />
        </div>
        <div className="col-8">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
