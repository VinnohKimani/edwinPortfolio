import { Github, Linkedin, Mail, MapPin, Phone, Workflow } from "lucide-react";
import React from "react";

const ContactSection = () => {
  const phone = "0712345678";
  const email = "kimruto@gmail.com";
  const location = "Nakuru";
  const linkendIn = "";
  const github = "";
  const upWork = "";

  return (
    <div id="contact" className="min-h-screen px-20 bg-[rgb(35,41,97)] pb-20">
      <div>
        <h1 className="pt-30 text-4xl text-center text-[rgb(250,181,21)] hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px] after:w-15 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-1 after:rounded-xl hover:cursor-pointer">
          Get In Touch
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-6">
        <div className="">
          <div
            className="flex
          items-center
          bg-gray-100
          rounded-xl
          shadow-md
          hover:shadow-lg
          transition-all
          duration-300
          p-6
          hover:scale-110
          hover:cursor-pointer"
          >
            <Mail size={40} className="text-[#EA4335]" />
            <div className="ml-4">
              {" "}
              <h2 className="text-lg font-semibold font-display text-[#EA4335]">
                Email
              </h2>
              <p className="text-[rgb(35,41,97)] italic">{email}</p>
            </div>
          </div>
          <div
            className="flex
          items-center
          bg-gray-100
          rounded-xl
          shadow-md
          hover:shadow-lg
          transition-all
          duration-300
          p-6
          hover:scale-110
          hover:cursor-pointer mt-3"
          >
            <Phone size={40} className="text-[#34A853]" />
            <div className="ml-4">
              <h2 className="text-[#34A853] ">Phone</h2>
              <p className="text-[rgb(35,41,97)] italic">{phone}</p>
            </div>
          </div>
          <div
            className="flex
          items-center
          bg-gray-100
          rounded-xl
          shadow-md
          hover:shadow-lg
          transition-all
          duration-300
          p-6
          hover:scale-110
          hover:cursor-pointer mt-3"
          >
            <MapPin size={40} className="text-[rgb(250,181,21)]" />
            <div className="ml-4">
              <h2 className="text-[rgb(250,181,21)] ">Location</h2>
              <p className="text-[rgb(35,41,97)] italic">{location}</p>
            </div>
          </div>
          <div className="flex items-center  bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:scale-110 hover:cursor-pointer mt-3">
            <Linkedin size={40} className="text-[#0077B5]" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold font-display text-[#0077B5]">
                LinkendIn
              </h2>
              <a
                href={linkendIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(35,41,97)] italic font-body hover:text-blue-600 hover:underline"
              >
                Edwin Ruto
              </a>
            </div>
          </div>
          <div className="flex items-center  bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:scale-110 hover:cursor-pointer mt-3">
            <Github size={40} className="text-black" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold font-display text-black">
                GitHub
              </h2>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(35,41,97)] italic font-body hover:text-blue-600 hover:underline"
              >
                Edwin Ruto
              </a>
            </div>
          </div>
          <div className="flex items-center  bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:scale-110 hover:cursor-pointer mt-3">
            <Workflow size={40} className="text-black" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold font-display text-black">
                UpWork
              </h2>
              <a
                href={upWork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(35,41,97)] italic font-body hover:text-blue-600 hover:underline"
              >
                Edwin Ruto
              </a>
            </div>
          </div>
        </div>
        <div>
          <form
            action="mailto:kimruto68@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-[rgb(35,41,97)]
          rounded-xl"
          >
            <div className="ml-4 pb-5 px-2">
              {" "}
              <label htmlFor="" className="text-[rgb(250,181,21)]">
                First Name
              </label>
              <input
                type="text"
                name="First Name"
                className="w-full p-3 rounded-xl bg-gray-100"
                required
              />
              <label htmlFor="" className="text-[rgb(250,181,21)]">
                Last Name
              </label>
              <input
                type="text"
                name="Last Name"
                className="w-full p-3 rounded-xl bg-gray-100"
                required
              />
              <label htmlFor="" className="text-[rgb(250,181,21)]">
                Email
              </label>
              <input
                type="email"
                name="Email"
                className="w-full p-3 rounded-xl bg-gray-100"
                required
              />
              <label htmlFor="" className="text-[rgb(250,181,21)]">
                Subject
              </label>
              <input
                type="text"
                name="Subject"
                className="w-full p-3 rounded-xl bg-gray-100"
                required
              />
              <label htmlFor="" className="text-[rgb(250,181,21)]">
                Message
              </label>
              <textarea
                name="description"
                placeholder="Type here..."
                className="w-full p-3 h-40 rounded-xl bg-gray-100"
                required
              />
              <button
                type="submit"
                className="bg-[rgb(250,181,21)] w-full text-[rgb(35,41,97)]font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 hover:scale-105 transition-all mt-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
