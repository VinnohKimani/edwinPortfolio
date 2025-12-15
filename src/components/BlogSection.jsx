import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: "1",
      title: "How I Connected My Local Terraform Project to GitHub",
      image:
        "https://miro.medium.com/v2/resize:fit:1052/format:webp/1*QbeuXGcbd0lKAlhXKm-1cg.jpeg",
      brief:
        "As a cloud enthusiast working on real-world Infrastructure as Code (IaC) projects using Terraform, After completing a Terraform course on Udemy, I was excited to start pushing real Infrastructure as Code (IaC) projects to GitHub not only for version control but to showcase my work. I thought it would be a smooth git init and push. Spoiler alert: it wasn’t.This post walks you through step-by-step how I connected my local Terraform project to GitHub, including the pitfalls I encountered, how I fixed them, and some tips you don’t want to miss.",
      link: "https://medium.com/@kimruto68/avoid-my-mistakes-pushing-your-iac-project-to-github-without-hitting-file-size-limits-059921437061",
    },
    {
      id: "2",
      title:
        "Installing PostgreSQL, Node.js, and Deploying a Node.js App on Amazon EC2 Instance",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fsvf1PM2ostGhDshKG8QDg.jpeg",
      brief:
        "Amazon Linux 2023 introduces some changes in package management. It uses dnf instead of amazon-linux-extras and provides PostgreSQL via AppStream repositories. This guide covers installing PostgreSQL, setting up a Node.js application, and ensuring it runs on an Amazon EC2 instance.",
      link: "https://medium.com/@kimruto68/installing-postgresql-node-js-and-deploying-a-node-js-app-on-amazon-linux-2023-908e10d7c429",
    },
    {
      id: "3",
      title:
        "Step-by-Step Guide to Install, Configure, and Use MySQL on an EC2 Instance",
      image:
        "https://miro.medium.com/v2/resize:fit:1382/format:webp/1*geGVnzRgb8oeOXYz0BdENw.jpeg",
      brief:
        "Why Set Up MySQL on an EC2 Instance?When it comes to hosting a MySQL database on AWS, you have two main options: Amazon RDS (Relational Database Service) or self-managed MySQL on an EC2 instance. Hosting MySQL on an EC2 instance instead of using Amazon RDS gives you more control and flexibility over your database environment. Here are some key reasons why you might choose EC2 over RDS:",
      link: "https://medium.com/@kimruto68/step-by-step-guide-to-install-configure-and-use-mysql-on-an-ec2-instance-1173933f1706",
    },
    {
      id: "4",
      title:
        "How to Host a Simple Static Website on AWS S3: A Step-by-Step Guide",
      image:
        "https://miro.medium.com/v2/resize:fit:1020/format:webp/1*qi5neKYMErZMxDXPoAyodg.png",
      brief:
        "Amazon S3 (Simple Storage Service) is ideal for hosting static websites because it serves files directly to users without the need for server-side processing. A static website consists of fixed content — HTML, CSS, JavaScript, images, and other assets — delivered exactly as stored. Unlike dynamic websites, which rely on server-side processing (e.g., databases, PHP, or Node.js), S3 lacks compute capabilities to generate content dynamically. Instead, it acts as a highly scalable and cost-effective storage solution for serving static files over the web, making it perfect for hosting simple websites, landing pages, or documentation.",
      link: "https://medium.com/@kimruto68/how-to-host-a-simple-static-website-on-aws-s3-a-step-by-step-guide-cf00bb30ebda",
    },
    {
      id: "5",
      title: "Build Amazon VPC with Public and Private Subnets",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NFdKnefu3qTjB8-WyZA7mA.png",
      brief:
        "A Virtual Private Cloud (VPC) is a customizable virtual network within the AWS Cloud, allowing you to define and control your own isolated environment for deploying cloud resources. It provides enhanced security and flexibility, making it a fundamental building block for designing scalable and secure applications on AWS.",
      link: "https://medium.com/@kimruto68/build-amazon-vpc-with-public-and-private-subnets-118794259c2b",
    },
    {
      id: "6",
      title:
        "A Step-by-Step Guide: Using M-Pesa Virtual Card to Sign Up for AWS",
      image:
        "https://miro.medium.com/v2/resize:fit:1074/format:webp/1*PJtFhx12pvZSex9Htbqhjw.jpeg",
      brief:
        "Imagine being able to create your AWS account without needing a physical bank card! Cloud enthusiast, Safaricom’s virtual ATM card makes cloud access easy and seamless. In this post, I’ll guide you step-by-step through setting up the virtual ATM card and using it to sign up for AWS — all without the hassle of a traditional bank card.",
      link: "https://medium.com/@kimruto68/a-step-by-step-guide-using-m-pesa-virtual-card-to-sign-up-for-aws-8a4c4709d49a",
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

              <p className="text-sm md:text-base text-gray-700 line-clamp-8">
                {blog.brief}
              </p>

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
