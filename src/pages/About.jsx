import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to our travel platform, where exploration knows no bounds. At [Travel Site Name], we are passionate about connecting travelers with unforgettable experiences across the globe. Whether you seek bustling cities, serene landscapes, or cultural marvels, we're here to make your journey seamless and extraordinary.
          </p>
          <br />
          
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
