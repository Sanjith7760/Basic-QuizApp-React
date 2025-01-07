import Navbar from "./Navbar";
import { motion } from 'framer-motion';
import './Python.css'
export default function Python() {
  return (  
    <motion.div
      className="python-page"
      initial={{ opacity: 0 }} // Initial state (hidden)
      animate={{ opacity: 1 }} // Animate to visible
      transition={{ duration: 1 }} // Animation duration
    >
      <Navbar />
      <motion.h3
        initial={{ y: -50, opacity: 0 }} // Slide down from top
        animate={{ y: 0, opacity: 1 }} // Animate to original position
        transition={{ duration: 1, delay: 0.5 }} // Delay for smooth transition
      >
        Python Quiz
      </motion.h3>

      {/* Question 1 */}
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Slide in from left
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>Q1. What is the primary use of Python?</p>
        <form>
          <input type="radio" id="a" name="q1" value="a" />
          <label htmlFor="a">a) Web development</label><br />
          <input type="radio" id="b" name="q1" value="b" />
          <label htmlFor="b">b) Data analysis</label><br />
          <input type="radio" id="c" name="q1" value="c" />
          <label htmlFor="c">c) Machine learning</label><br />
          <input type="radio" id="d" name="q1" value="d" />
          <label htmlFor="d">d) All of the above</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 2 */}
      <motion.div
        initial={{ x: 100, opacity: 0 }} // Slide in from right
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h3>Q2. Which of the following is a Python data type?</h3>
        <form>
          <input type="radio" id="a" name="q2" value="a" />
          <label htmlFor="a">a) Integer</label><br />
          <input type="radio" id="b" name="q2" value="b" />
          <label htmlFor="b">b) String</label><br />
          <input type="radio" id="c" name="q2" value="c" />
          <label htmlFor="c">c) List</label><br />
          <input type="radio" id="d" name="q2" value="d" />
          <label htmlFor="d">d) All of the above</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 3 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }} // Slide up from bottom
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h3>Q3. What is the purpose of the "print" function in Python?</h3>
        <form>
          <input type="radio" id="a" name="q3" value="a" />
          <label htmlFor="a">a) To print output to the console</label><br />
          <input type="radio" id="b" name="q3" value="b" />
          <label htmlFor="b">b) To read input from the user</label><br />
          <input type="radio" id="c" name="q3" value="c" />
          <label htmlFor="c">c) To execute a block of code</label><br />
          <input type="radio" id="d" name="q3" value="d" />
          <label htmlFor="d">d) To define a function</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

             {/* Question 5 */}
      <motion.div
        initial={{ rotate: -90, opacity: 0 }} // Rotate into view
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <h3>Q5. What is the purpose of the "len" function in Python?</h3>
        <form>
          <input type="radio" id="a" name="q5" value="a" />
          <label htmlFor="a">a) To get the length of a string</label><br />
          <input type="radio" id="b" name="q5" value="b" />
          <label htmlFor="b">b) To get the length of a list</label><br />
          <input type="radio" id="c" name="q5" value="c" />
          <label htmlFor="c">c) To get the length of a tuple</label><br />
          <input type="radio" id="d" name="q5" value="d" />
          <label htmlFor="d">d) All of the above</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 6 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Fade in and scale up
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <h3>Q6. What is the purpose of the "range" function in Python?</h3>
        <form>
          <input type="radio" id="a" name="q6" value="a" />
          <label htmlFor="a">a) To generate a sequence of numbers</label><br />
          <input type="radio" id="b" name="q6" value="b" />
          <label htmlFor="b">b) To generate a sequence of characters</label><br />
          <input type="radio" id="c" name="q6" value="c" />
          <label htmlFor="c">c) To generate a sequence of random numbers</label><br />
          <input type="radio" id="d" name="q6" value="d" />
          <label htmlFor="d">d) To generate a sequence of dates</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>
    </motion.div>
  );
}
