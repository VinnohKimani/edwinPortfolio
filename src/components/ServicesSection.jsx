import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: "1",
      title: "Expert Consultation",
      service: "Expert advice on optimizing your AWS infrastructure.",
    },
    {
      id: "2",
      title: "Scalable Solutions",
      service: "Scale your cloud solutions to meet growing demands.",
    },
    {
      id: "3",
      title: "Seamless Integration",
      service: "Effortlessly connect AWS tools with your existing apps.",
    },
    {
      id: "4",
      title: "Tutorial Guides",
      service: "Step-by-step tutorials for mastering AWS services.",
    },
    {
      id: "5",
      title: "Alerts & Notifications",
      service:
        "Stay on track with instant alerts and notifications for your tasks.",
    },
    {
      id: "6",
      title: "Data Encryption",
      service:
        "Top-tier encryption ensures all your data remains confidential.",
    },
    {
      id: "7",
      title: "Offline Access",
      service:
        "Continue working on projects even without an internet connection.",
    },
    {
      id: "8",
      title: "Secure Sharing",
      service: "Effortlessly share your work securely with clients or peers.",
    },
  ];
  return (
    <div id="myServices" className="bg-[rgb(35,41,97)] px-20 h-screen ">
      <div>
        <h1 className="pt-30 text-4xl text-center text-[rgb(250,181,21)] hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px] after:w-15 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-1 after:rounded-xl hover:cursor-pointer">
          My Services
        </h1>
        <h2 className="text-white text-center pt-5 text-3xl">
          Discover My Capabilities
        </h2>
        <p className="text-white text-center pt-1">
          Beyond cloud services a holistic approach to education and
          architecture in AWS solutions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 pt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 border-gray-200 shadow-md hover:cursor-pointer hover:shadow-lg transition-all duration-300 rounded-xl flex flex-col hover:-translate-y-2"
          >
            <div className="m-2">
              <h2 className="text-[rgb(250,181,21)] text-3xl font-semibold">
                {service.title}
              </h2>
              <p>{service.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
