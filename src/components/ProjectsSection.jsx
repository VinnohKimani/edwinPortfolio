import React from "react";

const ProjectsSection = () => {
  const blogs = [
    {
      id: "1",
      title: "Project 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKRpURTbQaCWxrRw8KDNMmsoCAG8urvrHZg&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "2",
      title: "Project 2",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQFJ-aNtL0ODJw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679422597271?e=2147483647&v=beta&t=26c01CG-2JJNnaA5f1d-EFopeVJA1UOrXG2T71-mgUM",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "3",
      title: "Project 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSIKjK8fKoxA7xhW7ItXvYLSKUrmheeyKsw&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "4",
      title: "Project 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbgngItafV0R4IPqONSTsQM7Fo1Mgl-8j8g&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
  ];
  return (
    <div id="projects" className="bg-[rgb(9,23,71)] px-20 min-h-screen pb-20">
      {" "}
      <h1 className="pt-30 text-4xl text-center text-[rgb(250,181,21)] hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px] after:w-15 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-1 after:rounded-xl hover:cursor-pointer">
        My Work
      </h1>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-gray-100 rounded-xl shadow-md  duration-300 hover:scale-105 hover:cursor-pointer overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="m-5">
              <h2 className="text-[rgb(250,181,21)] text-2xl font-semibold">
                {blog.title}
              </h2>
              <p>{blog.brief}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(250,181,21)] font-medium hover:text-blue-600 hover:underline"
              >
                Check it out →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
