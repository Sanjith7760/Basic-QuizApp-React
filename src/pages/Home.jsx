import { motion } from 'framer-motion';
import React from "react";
import './Home.css'
export default function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-description">
        Explore the world of programming with HTML, CSS, Java, and Python!
      </p>
    </motion.div>
  );
}
