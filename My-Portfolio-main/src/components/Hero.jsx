import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import profileImg from "../assets/krittika.jpg";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I'm Krittika Ravichandran, a Computer Science student who loves coding. I am skilled in creating user-friendly web apps with React, Tailwind, and MongoDB. 
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profileImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            style={{
    width: "300px",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "1rem"
  }}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
