import React from "react";

const CoursesCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-1/4 p-5 cursor-pointer rounded-lg hover:shadow-md transition-all ">
      <div className="w-3/1 h-2/3 mb-4">
        <img
          src={props.img}
          alt={props.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="text-center flex-grow">
        <h3 className="text-lg font-semibold mb-5">{props.title}</h3>
        <p className="text-gray-700 text-center md:text-start">
          Choosing the right courses for study is crucial for achieving your
          academic and career goals.
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
