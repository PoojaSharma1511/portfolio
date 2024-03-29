import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pooja-sharma-67134b245/",
      style: "rounded-tr-md",
      
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/PoojaSharma1511",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sharmapooja75753@gmail.com/me",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       instagram <HiOutlineMail size={30} />
    //     </>
    //   ),
    //   href: "https:",

    // },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/PoojaSharma_ReactDeveloper_resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="opacity-70 lg:flex flex-col top-[58%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-1 ml-[-125px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
