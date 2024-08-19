import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-[60vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-12">
      <div className="md:w-2/4 text-center mt-10">
        <h2 className="text-5xl font-semibold leading-tight">Knowledge With</h2> <span className="text-5xl font-semibold text-brightGreen">eStudy</span>
        <p className="text-lighText mt-5 text-start">
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge e-learning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
      <div className="w-full md:w-2/4 mt-6">
        <img
          src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Home;
