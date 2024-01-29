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
        Hey there! 👋 I'm Pooja Sharma, a React developer with 1 year of experience.
         I recently completed a rigorous MERN bootcamp at Eskill Web. 
         Passionate about enhancing user experiences, 
         I love crafting digital products that make a positive impact. 
         Let's connect and discuss how I can bring my skills to your projects! 🚀
      </p>

        <br />

        <p className="text-xl ml-4">
        Greetings! 👋 I'm a collaborative Frontend Developer, adept at working with 
        senior developers and stepping up when needed. I enjoy closely coordinating 
        with team members to redirect workloads efficiently during bottlenecks. 
        Driven by a passion for both personal growth and software development, 
        I dedicated over 1000 hours to a coding bootcamp, acquiring new languages
         and honing existing skills.

Now, I'm ready to channel my coding fervor into a talented engineering team,
 contributing to the creation of top-notch solutions. I bring a proven ability to 
 adapt and thrive in dynamic environments. Let's connect and explore how my skills can 
 add value to our collective journey! 🚀



        </p>
      </div>
    </div>
  );
};

export default About;
