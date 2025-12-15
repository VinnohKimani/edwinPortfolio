import React from "react";

const CertificationsSection = () => {
    const certifications = [
      {
        id: "1",
        title: "AWS re/Start Accredited Instructor",
        link: "https://www.credly.com/badges/23bb310c-34ba-4f01-bd42-099b917a8884",
        image:
          "https://images.credly.com/size/680x680/images/e426d40e-8a6a-4f72-866e-2abfcfbde46b/image.png",
      },
      {
        id: "2",
        title: "AWS Certified Solutions Architect – Associate",
        link: "https://www.credly.com/badges/4e9447be-164e-4087-9372-abca52df5608",
        image:
          "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      },
      {
        id: "3",
        title: "AWS re/Start Graduate",
        link: "https://www.credly.com/badges/a696d9e9-7d09-4a33-a73c-f57163034885",
        image:
          "https://images.credly.com/size/680x680/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
      },
      {
        id: "4",
        title: "AWS Educate Introduction to Cloud 101 - Training Badge",
        link: "https://www.credly.com/badges/2c8f3d40-6524-438d-b0a6-02292af7ea30",
        image:
          "https://images.credly.com/size/680x680/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob",
      },
      {
        id: "5",
        title: "AWS re/Start Accredited Instructor",
        link: "https://www.credly.com/badges/23bb310c-34ba-4f01-bd42-099b917a8884",
        image:
          "https://images.credly.com/size/680x680/images/e426d40e-8a6a-4f72-866e-2abfcfbde46b/image.png",
      },
      {
        id: "6",
        title: "AWS Certified Cloud Practitioner",
        link: "https://www.credly.com/badges/b69f56cb-c3d8-4c59-b58c-fa7c1fdeb0cf",
        image:
          "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      },
      {
        id: "7",
        title: "CCNA: Enterprise Networking, Security, and Automation",
        link: "https://www.credly.com/badges/b4ea60c0-e510-463c-8286-d0aa6d9e5e8d",
        image:
          "https://images.credly.com/size/680x680/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
      },
      {
        id: "8",
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        link: "https://www.credly.com/badges/7e3edfff-b35c-4833-ac72-31be8f046df3",
        image:
          "https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
      },
      {
        id: "9",
        title: "CCNA: Introduction to Networks",
        link: "https://www.credly.com/badges/bb02768a-19eb-48fc-8f8f-65ab2221acc0",
        image:
          "https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
      },
      {
        id: "10",
        title: "Introduction to Cybersecurity",
        link: "https://www.credly.com/badges/e1985b77-82f1-4c55-add5-419fcef456f6",
        image:
          "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      },
    ];

  return (
    <div id="certifications" className="bg-[rgb(9,23,71)] min-h-screen py-20">
      <h1
        className="text-3xl md:text-4xl text-center text-[rgb(250,181,21)]
        hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px]
        after:w-16 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-2 after:rounded-xl"
      >
        My Certifications
      </h1>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-20">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-lg
              hover:scale-105 transition-transform duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-32 h-32 md:w-36 md:h-36 object-contain"
            />

            <h2 className="mt-4 text-base md:text-lg font-semibold text-[rgb(9,23,71)] text-center hover:text-blue-600">
              {cert.title}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
