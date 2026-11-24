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
      className="bg-navy-dark px-6 md:px-20 min-h-screen py-20"
    >
      <h1 className="text-3xl md:text-4xl text-center text-gold-accent after:content-[''] after:block after:h-[3px] after:w-16 after:bg-gold-accent after:mx-auto after:mt-2 after:rounded-xl">
        My Work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-white rounded-xl shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-52 object-cover"
            />

            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-navy-primary text-xl font-bold">
                  {project.title}
                </h2>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {project.brief}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-navy-primary hover:text-gold-hover hover:underline pt-2 border-t border-slate-100"
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
