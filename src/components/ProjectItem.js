import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1 }}
    >
      <div
        className="projectItem"
        onClick={() => {
          navigate("/project/" + id);
        }}
      >
        <img
          src={image}
          alt={name}
          width="100%"
          height="160px"
          object-fit="cover"
          loading="lazy"
        />
        <h1> {name} </h1>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
