import React from "react";
import initialBlogs from "../data/blogsData.json";

const BlogSection = () => {
  const blogs = initialBlogs || [];

  return (
    <div
      id="blog"
      className="bg-navy-dark px-6 md:px-20 min-h-screen py-20"
    >
      <h1
        className="text-3xl md:text-4xl text-center text-gold-accent
        hover:scale-105 duration-300 after:content-[''] after:block after:h-[3px]
        after:w-16 after:bg-gold-accent after:mx-auto after:mt-2 after:rounded-xl"
      >
        My Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-white rounded-xl shadow-lg border border-slate-100
              duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-52 object-cover"
            />

            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-navy-primary text-lg md:text-xl font-bold line-clamp-2 leading-snug hover:text-navy-light transition-colors">
                  {blog.title}
                </h2>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {blog.brief}
                </p>
              </div>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-navy-primary hover:text-gold-hover hover:underline pt-2 border-t border-slate-100"
              >
                Read Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
