import React from "react";

export const HeroSection = () => {
  const title = " Certified AWS Solution Architect and Instructor";
  const pitch =
    "Empowering Your Cloud Journey with Expert Guidance from a Certified AWS Solutions Architect and Instructor";
  const slogan = "Transforming Your Vision with Scalable Cloud Solutions";

  return (
    <div id="home" className="bg-[rgb(35,41,97)] text-white h-screen py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 px-20">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-[rgb(250,181,21)] font-bold text-5xl">
            {" "}
            {title}
          </h1>

          <h1 className="text-2xl font-semibold mt-4">{pitch}</h1>
          <p className="text-lg mt-6">{slogan}</p>
          <div className="">
            <a
              href="#contact"
              className="inline-block mt-8 bg-[rgb(250,181,21)] text-white px-8 py-3 rounded-full font-semibold hover:text-black transition-all duration-300 hover:bg-yellow-400  hover:scale-110 shadow-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/HeroSectionImage4.png"
            alt="HeroSectionImage"
            className="w-full max-w-md h-100 pb-10 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
