import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const NavSection = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const links = [
    { id: "#home", name: "Home" },
    { id: "#about", name: "About Me" },
    { id: "#myServices", name: "My Services" },
    { id: "#certifications", name: "Certifications" },
    { id: "#blog", name: "Blog" },
    { id: "#projects", name: "Projects" },
    { id: "#contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#home";

      links.forEach((link) => {
        const section = document.querySelector(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top - 120 &&
            window.scrollY < top + height - 120
          ) {
            currentSection = link.id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-[rgb(35,41,97)] shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-bold text-[rgb(250,181,21)]">
          Edwin Ruto
        </h1>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className={`pb-1 transition ${
                  active === link.id
                    ? "text-yellow-400 border-b-2 border-[rgb(250,181,21)]"
                    : "text-[rgb(250,181,21)] hover:text-yellow-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[rgb(250,181,21)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[rgb(35,41,97)] px-6 pb-4">
          <ul className="flex flex-col space-y-4 font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  onClick={() => setOpen(false)}
                  className={`block ${
                    active === link.id
                      ? "text-yellow-400"
                      : "text-[rgb(250,181,21)] hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
