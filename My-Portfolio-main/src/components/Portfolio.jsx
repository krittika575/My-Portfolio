import React from "react";
import transport from "../assets/portfolio/transport.png";
import food from "../assets/portfolio/food.png";
import career from "../assets/portfolio/career.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: transport,
      demo_link : "#",
      code_link : "https://github.com/krittika575/Transport_management_system.git",
    },
    {
      id: 2,
      src: food,
      demo_link : "#",
      code_link : "https://github.com/krittika575/Restaurant-Landing-Page.git",
    },
    {
      id: 3,
      src: career,
      demo_link : "#",
      code_link : "https://github.com/krittika575/Career_portal.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo_link, code_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo_link} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                    Demo
                  </button>
                </a>
                <a href={code_link} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
