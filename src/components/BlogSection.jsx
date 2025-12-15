import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: "1",
      title: "Blog 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KAlrHuDKVF06-cRNaeXcPzB5pbLgqSc-_g&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "2",
      title: "Blog 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMGl8QAo8SpCh_HJ4aia-8agpOdGGSxbKKg&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "3",
      title: "Blog 3",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQFlPfLy6KuOaQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684776743946?e=2147483647&v=beta&t=Op_iXFAWO7caK9tieM_Cm9O_h1t5hM0lINgxrD4Cc1Y",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
    {
      id: "4",
      title: "Blog 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNgrry4NBu5xyutJ8cdcYkTQh37YNXa5dqw&s",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad, cumque cupiditate, adipisci doloremque, praesentium maxime beatae ea eius magni optio maiores exercitationem error vitae repellendus ipsa sed quam. Incidunt?",
      link: "https://en.wikipedia.org/wiki/Blog",
    },
  ];

  return (
    <div
      id="blog"
      className="bg-[rgb(35,41,97)] px-6 md:px-20 min-h-screen pb-20"
    >
      <h1
        className="pt-12 text-3xl md:text-4xl text-center text-[rgb(250,181,21)]
        hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px]
        after:w-16 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-2 after:rounded-xl"
      >
        My Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-gray-100 rounded-xl shadow-md
              duration-300 hover:scale-105 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-56 object-cover"
            />

            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-[rgb(250,181,21)] text-xl md:text-2xl font-semibold">
                {blog.title}
              </h2>

              <p className="text-sm md:text-base text-gray-700">{blog.brief}</p>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(250,181,21)] font-medium hover:text-blue-600 hover:underline self-start"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
