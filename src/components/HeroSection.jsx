import React from "react";

export const HeroSection = () => {
  const title = "Certified AWS Solution Architect and Instructor";
  const pitch =
    "Empowering your cloud journey with expert guidance from a Certified AWS Solutions Architect and Instructor";
  const slogan = "Transforming your vision with scalable cloud solutions";

  return (
    <section
      id="home"
      className="bg-[rgb(35,41,97)] text-white min-h-screen flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 py-20 w-full">
        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-[rgb(250,181,21)] font-bold text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
            {pitch}
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-200">{slogan}</p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-[rgb(250,181,21)] text-[rgb(35,41,97)]
              px-6 py-3 rounded-full font-semibold
              hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/HeroSectionImage4.png"
            alt="Hero Section"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};
