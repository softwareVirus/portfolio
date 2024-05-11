import { usePage } from "@/context/page";
import { motion } from "framer-motion";
import React from "react";

const navigationOptions = [
  {
    class: "fa fa-user",
    title: "Who Am I",
  },
  {
    class: "fa fa-code",
    title: "Projects",
  },
  {
    class: "fa fa-link",
    title: "Contacts",
  },
  {
    class: "fa fa-file-text",
    title: "Blogs",
  },
];

const BottomNavigation = () => {
  const pageContext = usePage();
  const { selectedStep, setSelectedStep } = pageContext;
  const handlePageChange = (index) => {
    setSelectedStep(index);
  };
  return (
    <div class="bottom-bar">
      {navigationOptions.map((option, index) => (
        <motion.button
          key={option.class}
          onClick={() => handlePageChange(index)}
          className={`${selectedStep === index ? "active" : ""}`}
          animate={{
            scale: selectedStep == index ? 1.1 : 0.9,
          }}
          transition={{duration: 0.2}}
        >
          <i className={option.class}></i> {option.title}
        </motion.button>
      ))}
    </div>
  );
};

export default BottomNavigation;
