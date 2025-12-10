import React from "react";

const AboutMeSection = () => {
  return (
    <div id="about" className="bg-[rgb(35,41,97)] pb-40">
      <h1 className="pt-10 text-4xl text-center text-[rgb(250,181,21)] hover:scale-110 duration-300 after:content-[''] after:block after:h-[3px] after:w-15 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-1 after:rounded-xl hover:cursor-pointer">
        About Me
      </h1>
      <div>
        <div className="mt-10 px-20">
          <p className="text-white ">
            Hi, I’m Edwin  a certified AWS Solutions Architect and Instructor
            with three years of experience in cloud computing. I specialize in
            various AWS services, including compute (EC2 instances), storage (S3
            and EBS volumes), and networking (VPC). With this expertise, I can
            design, implement, and maintain secure, scalable, and cost-effective
            cloud infrastructures tailored to your organization’s needs. I am
            passionate about leveraging my skills to deliver innovative
            solutions that meet the evolving demands of businesses. My focus is
            always on efficiency whether provisioning resources for a project or
            building complex cloud architectures. I thrive on finding optimal
            solutions, particularly within cloud environments, and I am
            committed to ensuring the success of every project I engage in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
