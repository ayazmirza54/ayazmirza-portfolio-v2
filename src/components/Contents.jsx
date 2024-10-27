import React from "react";
import profile from "../assets/profile2.png";
import CVdownload from "./CVdownload";
const Contents = () => {
  const contentItems = [
    {
      title: "Introduction",
      id: "introduction",
      subItems: [],
    },
    {
      title: "Work Experience",
      id: "work-experience",
      subItems: ["Wipro Ltd. > Nov,2019 - Present", "Cosmo InfoSolutions Pvt. Ltd. > June,2019 - Oct,2019"],
    },
    {
      title: "Projects",
      id: "projects",
      subItems: ["Text/Code Utils.AI",
        "Intellisketch",
        "Chat2pdf using gemini",
        "System Metrics Logging Script",
        "Studysensie",
        "Movie-Finder",
        "Stone-Paper-Scissor-Game",
        "Quote-Generator"
      ],
    },
    {
      title: "Blogs",
      id: "blogs",
      subItems: ["Blog 1 : Intellisketch : AI powered drawing tool 🖌️",
        "Blog 2 : Text and Code Utilities App using OpenAI API",
        "Blog 3 : 🤖 chatGPT on loop➰ using babyAGI and AutoGPT",
    "Blog 4 : Migrating my app from chatgpt API to Gemini AI API"],
    },
    {
      title: "Tech Stack",
      id: "tech-stack",
      subItems: [],
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-container flex flex-col md:w-1/2 md:flex-row md:justify-center text-left justify-center">
      <div className="mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-bold mb-4">CONTENTS</h2>
        <ul className="space-y-2">
          {contentItems.map((item, index) => (
            <li key={index} className="relative pl-4">
              <span 
                className="hover:underline cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </span>
              {item.subItems.length > 0 && (
                <ul className="mt-1 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative pl-4">
                      <span className="text-sm">{subItem}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <img 
          src={profile} 
          className="w-full h-auto object-cover mb-4" 
          alt="Ayaz Mirza" 
        />
        <CVdownload />
      </div>
    </div>
  );
};

export default Contents;
