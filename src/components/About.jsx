import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-90 bg-gradient-to-b from-cyan-800 to-cyan-900 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-4" >
            About
          </p>
        </div>

        <p className="text-xl mt-20 ml-4">
        Hello stranger! 👋, my name is Pooja sharma and I am a Full Stack Developer, passionate 
        about building digital products that improve everyday experience for people.
        And i  have completed MERN bootcamp training from Eskill web .
      </p>

        <br />

        <p className="text-xl ml-4">
        Full Stack Developer with a proven ability to collaborate effectively with senior developer 
        while spending extra time to be mentored. Enjoy working closely with team members to ensure 
        workloads are effectively redirected to bottlenecks and personally picking up the slack when 
        necessary. With the passion for both personal growth and for software development, I attended a 
        1000+ hour coding bootcamp to learn new languages while sharpening existing skills. Ready to apply
         my passion for coding to a talented engineering team to develop quality solution.
        </p>
      </div>
    </div>
  );
};

export default About;
