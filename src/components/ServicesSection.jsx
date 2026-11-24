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
      title: "Seamless Migration",
      service: "Effortlessly connect AWS tools with your existing apps.",
    },
    {
      id: "4",
      title: "Training",
      service:
        "Coaching for CCP and Solution Architect with study plans and practice tests.",
    },
    {
      id: "5",
      title: "Hands-on Support ",
      service:
        "Live deployments setup and troubleshooting for core services like: EC2, S3 and more.",
    },
    {
      id: "6",
      title: "Data Encryption",
      service:
        "Top tier encryption ensures all your data remains confidential.",
    },
    {
      id: "7",
      title: "AWS CCP & S.A Exams Prep",
      service:
        "Focussed preparation and one on one coaching to assist you pass in the first attempt",
    },
    {
      id: "8",
      title: "Secure Sharing",
      service: "Effortlessly share your work securely with clients or peers.",
    },
  ];

  return (
    <section
      id="myServices"
      className="bg-navy-primary px-6 md:px-20 min-h-screen py-20"
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl text-gold-accent after:content-[''] after:block after:h-[3px] after:w-16 after:bg-gold-accent after:mx-auto after:mt-2 after:rounded-xl">
          My Services
        </h1>

        <h2 className="text-white text-xl md:text-3xl pt-5 font-semibold">
          Discover My Capabilities
        </h2>

        <p className="text-gray-200 max-w-3xl mx-auto pt-2 text-sm md:text-base">
          Beyond cloud services a holistic approach to education and
          architecture in AWS solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-slate-100 shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-navy-primary text-xl font-bold">
                {service.title}
              </h3>

              <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
                {service.service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
