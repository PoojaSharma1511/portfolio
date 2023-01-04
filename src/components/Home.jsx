import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray to-cyan-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-semibold text-white ml-4 ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md ml-4">
            I have 6 month of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, node-js,javascript,html and css.
          </p>

          <div>
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 ml-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="image-sec">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-1/3 md:w-full opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
