import React, { Fragment } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Projects = ({ title, projects }) => {
  return (
    <Fragment>
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ marginBottom: "1.5rem" }}>{title}</h1>
        <div className="projects-box">
          {projects.map((project) => (
            <Link href={project.url} key={project.id} target="_blank">
              <div class="article-card">
                <div class="content">
                  <p class="title">{project.title}</p>
                </div>
                <Image
                  width={800}
                  height={400}
                  src={project.image}
                  alt="article-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </Fragment>
  );
};

export default Projects;
