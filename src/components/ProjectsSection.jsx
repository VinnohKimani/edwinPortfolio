import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: "1",
      title: "Project 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKRpURTbQaCWxrRw8KDNMmsoCAG8urvrHZg&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate.",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "2",
      title: "Project 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate.",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "3",
      title: "Project 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSIKjK8fKoxA7xhW7ItXvYLSKUrmheeyKsw&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate.",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "4",
      title: "Project 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbgngItafV0R4IPqONSTsQM7Fo1Mgl-8j8g&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate.",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[rgb(9,23,71)] px-6 md:px-20 min-h-screen pb-20"
    >
      <h1 className="pt-20 text-3xl md:text-4xl text-center text-[rgb(250,181,21)] after:content-[''] after:block after:h-[3px] after:w-16 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-2 after:rounded-xl">
        My Work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-gray-100 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-56 object-cover"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-[rgb(250,181,21)] text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-sm text-gray-700 mt-2 flex-grow">
                {project.brief}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[rgb(250,181,21)] font-medium hover:text-blue-600 hover:underline"
              >
                Check it out →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
