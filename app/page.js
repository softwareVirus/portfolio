"use client";
// pages/index.js
import { motion } from "framer-motion";
import { pageVariants } from "./pageTransitions";
import { useEffect } from "react";
import Introduction from "@/components/WhoAmI";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import { usePage } from "@/context/page";
import microBlogImage from "@/public/microblog.webp";
import lokyImage from "@/public/loky.webp";
import codewarsImage from "@/public/codewars.webp";
import gdscImage from "@/public/gdsc.webp";
import faceImage from "@/public/face.webp";

const projects = [
  {
    id: "project1",
    title: "Micro Blog",
    url: "https://github.com/softwareVirus/micro-blog",
    image: microBlogImage,
  },
  {
    id: "project2",
    title: "Loky Store",
    url: "https://github.com/softwareVirus/loky-store",
    image: lokyImage,
  },
  {
    id: "project3",
    title: "Codewars Kata Tracking",
    url: "https://github.com/softwareVirus/codewars-track-solved-kyus",
    image: codewarsImage,
  },
  {
    id: "project4",
    title: "Quiz App",
    url: "https://github.com/softwareVirus/gdsc-yasar",
    image: gdscImage,
  },
];

const blogs = [
  {
    id: "blog1",
    title:
      "Revolutionizing Face Recognition with MobileNetV3 and ArcFace: Comprehensive Analysis and Results",
    url: "https://medium.com/@brhmskl2001/revolutionizing-face-recognition-with-mobilenetv3-and-arcface-comprehensive-analysis-and-results-fa51dc5d9903",
    image: faceImage,
  },
];

const pages = [
  <Introduction key={"introduction"} />,
  <Projects key={"projects"} title="My Projects" projects={projects} />,
  <Contacts key={"contacts"} />,
  <Projects title="My Blogs" projects={blogs} key={"blogs"} />,
];

const IndexPage = () => {
  const pageContext = usePage();
  const { selectedStep, setSelectedStep } = pageContext;

  const handleStepBar = (direction) => {
    if (direction === "up") {
      setSelectedStep((prev) => (prev == pages.length - 1 ? prev : prev + 1));
    } else if (direction === "down") {
      setSelectedStep((prev) => (prev == 0 ? prev : prev - 1));
    }
  };
  
  const handleWheel = (event) => {
    if (event.ctrlKey || event.shiftKey || event.clientX <= 600) return;
    if (event.deltaY > 0) {
      // Scroll down
      handleStepBar("down");
    } else if (event.deltaY < 0) {
      // Scroll up
      handleStepBar("up");
    }
  };
  
  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      variants={pageVariants}
    >
      {pages[selectedStep]}
    </motion.div>
  );
};

export default IndexPage;
