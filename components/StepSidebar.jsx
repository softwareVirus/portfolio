import { usePage } from "@/context/page";
import { Fragment } from "react";
import { motion } from "framer-motion";
export default function StepSidebar() {
  const pageContext = usePage();
  const { selectedStep, setSelectedStep } = pageContext;
  const pages = ["Who Am I?", "Projects", "Contact", "Blogs"];
  const handleStepClick = (index) => {
    setSelectedStep(index);
  };
  return (
    <div className="vertical-progress-bar">
      <ul className="progress-steps">
        {[...Array(pages.length)].map((_, index) => (
          <Fragment key={index * Math.random() * 100}>
            <motion.li
              className={`progress-step ${
                index <= selectedStep ? "active" : ""
              }`}
              animate={{
                scale: selectedStep == index ? 1.9 : 1,
              }}
              onClick={() => handleStepClick(index)}
              transition={{ duration: 0.1 }}
            ></motion.li>
            {index < pages.length - 1 ? (
              <motion.div
                transition={{ duration: 0.1 }}
                className={`edge ${selectedStep > index ? "active" : ""}`}
              />
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </ul>
      <ul className="step-texts">
        {pages.map((page, index) => (
          <Fragment key={page + index}>
            <motion.li
              className={`step-text ${selectedStep >= index ? "active" : ""}`}
              onClick={() => handleStepClick(index)}
              animate={{
                scale: selectedStep == index ? 1.5 : index < selectedStep ? 1.2 : 1,
                marginLeft:
                  selectedStep == index
                    ? "1.85rem"
                    : selectedStep > index
                    ? "0.85rem"
                    : 0,
              }}
              transition={{ duration: 0.1 }}
            >
              {page}
            </motion.li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
