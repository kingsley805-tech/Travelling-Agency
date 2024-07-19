import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "An iconic symbol of love, the Taj Mahal is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The Grand Canyon is one of the most iconic natural wonders in the world. With its vast, breathtaking views and numerous hiking trails, it offers a unique experience for nature lovers and adventurers alike.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Hiroshima is a city with a poignant history but vibrant present. Visit the Peace Memorial Park and Museum to learn about the atomic bombing and its aftermath. Miyajima Island with its iconic floating torii gate is also a must-see.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
