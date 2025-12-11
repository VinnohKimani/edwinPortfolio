import React, { useEffect, useState } from "react";

export const NavSection = () => {
  const [active, setActive] = useState("#home");
  const links = [
    { id: "#home", name: "Home" },
    { id: "#about", name: "About Me" },
    { id: "#myServices", name: "My Services" },
    { id: "#certifications", name: "Certifications" },
    { id: "#blog", name: "Blog" },
    { id: "#Projects", name: "Projects" },
    { id: "#contact", name: "Contact" },
  ];
  useEffect(() => {
    const handlescroll = () => {
      let currentSection = "#home";
      //   iterationg through the array of links
      links.forEach((link) => {
        const section = document.querySelector(link.id);
        // check if sections exist
        if (section) {
          // Get section position on the page
          const top = section.offsetTop;
          const height = section.offsetHeight;
          //   Check the section that the user in
          if (
            window.scrollY >= top - 100 &&
            window.scrollY < top + height - 100
          ) {
            currentSection = link.id;
          }
        }
      });
      setActive(currentSection);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <nav className="w-full fixed bg-[rgb(35,41,97)] shadow-md z-50">
      <div className="mx-auto px-20 py-3 flex justify-between items-center pt-6">
        <h1 className="text-4xl font-bold text-[rgb(250,181,21)] hover:cursor-pointer">
          Edwin Ruto
        </h1>
        <ul className="flex space-x-6 font-semibold">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className={`pb-1 ${
                  active === link.id
                    ? "text-yellow-400 border-b-2 border-[rgb(250,181,21)]"
                    : "text-[rgb(250,181,21)] hover:text-yellow-400 hover:cursor-pointer"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
