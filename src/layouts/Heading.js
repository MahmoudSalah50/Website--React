import React from "react";

const Heading = (props) => {
  return (
    <div className="mb-2">
      <h3 className="text-4xl font-semibold">{props.title} <span className="text-4xl font-semibold text-brightGreen">{props.title2}</span></h3>
      
    </div>
  );
};

export default Heading;
