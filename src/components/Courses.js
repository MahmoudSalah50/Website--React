import React from "react";
import Heading from "../layouts/Heading";
import CoursesCard from "../layouts/CoursesCard";
import app from "../assets/app.webp";
import web from "../assets/web.jpeg";
import digital from "../assets/degital.jpeg";
import graphic from "../assets/graphic.jpeg";
import ui from "../assets/ui.jpeg";
import ai from "../assets/ai.webp";

const Courses = () => {
  return (
    <div className="min-h-screen col-6 flex flex-col items-center md:px-32 my-10  ">
      <Heading title="Our" title2="Courses" />
      <div className="flex flex-wrap  justify-center gap-10 mt-6">
        <CoursesCard img={web} title="Web Development" />
        <CoursesCard img={app} title="App Development" />
        <CoursesCard img={digital} title="Digital Marketing" />
        <CoursesCard img={graphic} title="Graphic Design" />
        <CoursesCard img={ui} title="UI UX" />
        <CoursesCard img={ai} title="AI" />
      </div>
    </div>
  );
};

export default Courses;
