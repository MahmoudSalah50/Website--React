import React from "react";

const ReveiwCard = (props) => {
  return (
    <div className="w-full  md:w-1/3 bg-2hite border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgb(0,0,0,0.24)_0px_3px_8px] transation-all cursor-pointer">
      <div>
        <p className="text-lightText">
          Our reviews section provides insights and feedback from students and
          professionals who have experienced our courses.
         
          honest feedback.
        </p>
        <div className="flex flex-row justify-center ">
          <img 
            className="rounded-full w-1/2 mt-5 "
            src={props.img}
            alt={props.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ReveiwCard;
