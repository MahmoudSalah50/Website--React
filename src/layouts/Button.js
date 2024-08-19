import React from "react";

function Button(props) {
  return (
    <div>
      <button className="bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_8px_rgb(0,0,0,0.24)] hover:bg-brightGreen hover:text-white transation">
        {props.title}
      </button>
    </div>
  );
}

export default Button;
