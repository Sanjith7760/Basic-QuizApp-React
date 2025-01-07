import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/html" className="nav-link">HTML</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/css" className="nav-link">CSS</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/java" className="nav-link">Java</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/python" className="nav-link">Python</Link>
      </motion.div>
    </motion.nav>
  );
}