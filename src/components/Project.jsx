import React from "react";
import paratha from "../assets/Project/paratha.jpg"
import rapido1 from "../assets/Project/rapido1.png";
// import cal from "../assets/Project/cal.png"
// import expanse from "../assets/Project/expanse.jpg"
import live from "../assets/Project/live.png";
// import micro from "../assets/Project/micro.png"
import quotes from "../assets/Project/quotes.jpg"

const Project = () => {
  const Projects = [
    {
      id: 1,
      src: paratha,
      url : "https://pooja-paratha-store.netlify.app/"
    },
    {
      id: 2,
      src: live,
      // url : "https://expanse-manager-app.netlify.app/"
      url : "https://abhinavnursinghomeindore.com/"
    },
    {
      id: 3,
      src: rapido1,
      url : "https://rapido-clone-app.netlify.app/"

    },
    {
      id: 4,
      src: quotes,
      url : "https://quoteg.netlify.app/"
    },
    // {
    //   id: 5,
    //   src: login,
    //   url : "https://cloneloginpj.netlify.app/"
    // },
    // {
    //   id: 6,
    //   src : vedshree,
    //   url : "https://vedshree-ayur.netlify.app/"

    // },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-cyan-900 to-gray-600 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-4">
            Project
          </p>
          <p className="py-6 ml-4">Check out some of my work right here</p>
        </div>

        <div className="grid m:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map(({ id, src,url }) => (
            <div key={id} className="shadow-md shadow-black rounded-lg">
              <img
                src={src}
                alt=""
                className="w-100 h-20 rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=>{window.open(url,"_blank")}} className="w-1/1 px-4 py-3 m-1 duration-400 hover:scale-90">
                  Demo
                </button>
            


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
