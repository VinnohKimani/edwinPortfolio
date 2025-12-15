import React from "react";

const AboutMeSection = () => {
  return (
    <div id="about" className="bg-[rgb(9,23,71)] py-20 min-h-screen">
      <h1
        className="text-3xl md:text-4xl text-center text-[rgb(250,181,21)] 
        hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px] 
        after:w-16 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-2 after:rounded-xl"
      >
        About Me
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-20">
        <div>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Hi, I’m Edwin, a certified AWS Solutions Architect and Instructor
            with three years of experience in cloud computing. I specialize in
            various AWS services, including compute (EC2), storage (S3 and EBS),
            and networking (VPC).
            <br />
            <br />
            With this expertise, I design secure, scalable, and cost-effective
            cloud infrastructures tailored to business needs. I’m passionate
            about delivering innovative cloud solutions while maintaining
            efficiency and reliability.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"
            alt="profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
