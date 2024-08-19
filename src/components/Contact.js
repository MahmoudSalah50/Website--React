import React from "react";
import Heading from "../layouts/Heading";
import Button from "../layouts/Button";
import contact from "../assets/contact.jpeg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title="Contact" title2="Us" />

      <div className="flex flex-col md:flex-row justify-between w-full mt-10">
        <form className="w-full md:w-2/5 space-y-5">
          <div className="flex flex-col">
            <label htmlFor="user">UserName:</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-lg transition-all"
              type="text"
              name="user"
              id="user"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">YourEmail:</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-lg transition-all"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="number">Your Number:</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-lg transition-all"
              type="number"
              name="number"
              id="number"
              placeholder="Enter your number"
            />
          </div>
          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>
        <div className="w-full md:w-2/5 flex items-center justify-center md:pl-10 mt-10 md:mt-0">
          <img
            src={contact}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
