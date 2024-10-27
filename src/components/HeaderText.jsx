import React from 'react'

const HeaderText = () => {
  const socialLinks = {
    Twitter: "https://twitter.com/ayazmirza54",
    LinkedIn: "https://www.linkedin.com/in/ayazmirza54",
    Github: "https://github.com/ayazmirza54"
  };

  return (
    <div className="portfolio-container grid grid-cols-1 md:grid-cols-12 gap-4 ">
      <div className="header-text col-span-1 md:col-span-8 border border-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">Ayaz Mirza</h1>
        <p className="text-xl md:text-2xl mt-2">Software Engineer</p>
      </div>
      <div className="social-links col-span-1 md:row-span-2 md:col-span-4 grid grid-cols-1 md:grid-cols-1 gap-4 border border-white p-4">
        {Object.entries(socialLinks).map(([platform, link]) => (
          <a 
            key={platform} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="grid grid-cols-2 items-center p-2 border border-white hover:bg-white hover:text-black transition-colors"
          >
            <p className="font-bold">{platform}🔗</p>
            <p>{platform === "ayazmirza54" ? "ayazmirza54" : `ayazmirza54`}</p>
          </a>
        ))}
      </div>
      <div className="email col-span-1 md:col-span-8 grid grid-cols-8 items-center border border-white p-4">
        <p className="font-bold col-span-2 md:col-span-1">Email</p>
        <p className="col-span-6 md:col-span-7">ayazmirza54@gmail.com</p>
      </div>
    </div>
  )
}

export default HeaderText
