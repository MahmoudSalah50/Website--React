import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-white shadow-[0_-3px_10px_rgb(0,0,0,0.2)] py-5 mt-10 ">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:px-32 px-5 ">
        <nav className="flex flex-col md:flex-row gap-5 font-medium text-center cursor-pointer ">
          <Link 
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all"
          >
            Contact
          </Link>
        </nav>
        <div>
          <Link className="font-semibold text-2xl p-1 cursor-pointer text-brightGreen" to="home">
            eStudy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
