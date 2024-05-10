import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import '@/style/introduction.css'

const Introduction = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -75 }}
        transition={{ duration: 0.5, delay: 2.25 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0 }}
          className="who-am-i-title"
        >
          Hi There👋,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="who-am-i-title"
        >
          I&apos;m Ibrahim Halil,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, delay: 1 }}
          className="who-am-i-title"
        >
          Software Engineer
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.25 }}
      >
        <h3 style={{ fontSize: "1.5rem", lineHeight: 1.4 }}>
          I am a software engineer and competitive programmer. I participated in
          many code competitions and hackathons and achieved success. I have
          been developing web applications for 3 years.
        </h3>
        <Link
          href={
            "https://drive.google.com/file/d/1hQhNZG87s4G2xduFCmhu_WypVibkzzRd/view?usp=sharing"
          }
          target="_blank"
          className="resume-button"
        >
          Get My Resume{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"></path>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default Introduction;
