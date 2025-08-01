import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
   const menuItems = [
    { label: "Tentang", link: "#tentang" },
    { label: "Pengalaman", link: "#pengalaman" },
    { label: "Project", link: "#project" },
    { label: "Bisnis", link: "#bisnis" },
  ];

  return (
    <>
      <nav
        className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 px-6 ${
          isScrolled
            ? "mx-auto border border-green-300/20 rounded-xl mt-3 shadow-lg max-w-[90%] md:max-w-3xl lg:max-w-4xl py-2 "
            : "w-full py-4 border-none"
        } bg-black/10 backdrop-blur`}

        
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-white">
            Elxiwix
          </a>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex space-x-6 justify-center items-center${
          isScrolled
            ? " absolute left-1/3 transform -translate-x-1/2  ml-2 md:ml-4 "
            : "absolute left-1/2 transform -translate-x-1/2"
        } `}>
              {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-white hover:bg-green-300/20 px-3 py-2 rounded transition"
            >
              {item.label}
            </a>
          ))}
          </div>

          {/* Right side (icons) */}
          <div className="flex items-center space-x-2 ml-2">
            <a
              href="https://github.com/Elxixau?tab=repositories"
              className="relative text-white border border-gray-700 hover:bg-green-700 transition duration-300 w-8 h-8 flex items-center justify-center rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                className="fill-gray-200"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/indra-parlindungan"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 text-white hover:bg-green-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-5 h-5 fill-gray-200 rounded"
              >
                <path d="M41,4H9C6.791,4,5,5.791,5,8v34c0,2.209,1.791,4,4,4h32c2.209,0,4-1.791,4-4V8C45,5.791,43.209,4,41,4z M17,39h-5V20h5V39z
                M14.5,17.5c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S16.157,17.5,14.5,17.5z M39,39h-5V28.5c0-2.485-2.015-4.5-4.5-4.5
                S25,26.015,25,28.5V39h-5V20h5v2.5c1.143-1.765,3.083-2.5,5-2.5c4.142,0,7,3.358,7,7.5V39z"/>
              </svg>
            </a>

            <a
              href="mailto:indra90078@gmail.com"
              className="relative text-white  border border-gray-700 hover:bg-green-700 transition duration-300 w-8 h-8 flex items-center justify-center rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="text-gray-200"
              >
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.222l7.445 4.964a1 1 0 001.11 0L20 8.222V18H4z" />
              </svg>
            </a>
            <div className="px-2">
              <a
              href="/files/CV Indra Parlindungan.pdf"
              download
              className="relative  text-white border border-gray-700 hover:bg-green-700 transition duration-300 w-20  h-10 flex items-center justify-center rounded-md"
              title="Download CV"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="text-gray-200 mr-2"
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5z" />
                <path d="M20 18H4v2h16v-2z" />
              </svg>

              CV
            </a>
            </div>

          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col lg:hidden mt-4 space-y-2 text-white bg-black/80 rounded-lg p-4 shadow-lg">
               {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-white hover:bg-green-300/20 px-3 py-2 rounded transition"
            >
              {item.label}
            </a>
          ))}
            {/* Ikon di bawah menu mobile */}
            <div className="flex justify-around mt-4">
              {/* Salin ikon dari desktop */}
              {/* ... */}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer untuk tinggi navbar */}
      <div className="h-24" />
    </>
  );
}
