import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import Heading from "../layouts/Heading";

function About() {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mb-5">
      <div className="w-full md:w-2/4">
        <img
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
        />
      </div>
      <div className="w-full md:w-2/4 text-center spay-y-2">
        <Heading title="About" title2="Us?" />
        <p>
          Welcome to eStudy, your gateway to a world of boundless learning
          opportunities. At eStudy, we believe that education should be
          accessible, engaging, and tailored to your needs. Our cutting-edge
          e-learning platform offers a vast library of courses that cater to a
          diverse range of interests and professional goals. Whether you're
          looking to advance your academic knowledge, acquire new practical
          skills, or explore a new hobby, eStudy provides high-quality,
          interactive content designed to help you achieve your aspirations.
          Join our community of learners today and embark on a journey of
          personal and professional growth with eStudy, where your learning
          journey is our top priority.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
}

export default About;
