import { motion } from "framer-motion";
import React from "react";

const FadeIn = ({ children, bottom = false, delay = 0 }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: bottom ? 20 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;