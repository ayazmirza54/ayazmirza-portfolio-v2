import React from "react";

const HeaderText = () => {
  const socialLinks = {
    Twitter: "https://twitter.com/ayazmirza54",
    LinkedIn: "https://www.linkedin.com/in/ayazmirza54",
    Github: "https://github.com/ayazmirza54",
  };

  return (
    <div className="portfolio-container grid grid-cols-1 md:grid-cols-12 gap-4 ">
      <div className="header-text col-span-1 md:col-span-8 relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
        <div className="bg-black rounded-lg p-4 h-full">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Ayaz Mirza
          </h1>
          <p className="text-xl md:text-2xl mt-2">Software Engineer</p>
        </div>
      </div>
      <div className="social-links col-span-1 md:row-span-2 md:col-span-4 flex flex-col relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
        <div className="bg-black rounded-lg p-4 h-full flex flex-col space-y-4">
          {Object.entries(socialLinks).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300"
            >
              <div className="grid grid-cols-2 items-center p-2 rounded-lg bg-black hover:bg-white hover:text-black transition-colors">
                <p className="font-bold">{platform}🔗</p>
                <p>
                  {platform === "ayazmirza54" ? "ayazmirza54" : `ayazmirza54`}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="email col-span-1 md:col-span-8 relative p-[2px] rounded-lg bg-gradient-to-bl from-gray-800 via-slate-500 to-gray-300">
        <div className="bg-black rounded-lg p-4 h-full">
          <div className="grid grid-cols-8 items-center">
            <p className="font-bold col-span-2 md:col-span-1">Email</p>
            <p className="col-span-6 md:col-span-7">ayazmirza54@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
