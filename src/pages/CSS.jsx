import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
import './CSS.css'
export default function CSS() {
  return (
    <motion.div
      className="html-page"
      initial={{ opacity: 0 }} // Initial state (hidden)
      animate={{ opacity: 1 }} // Animate to visible
      transition={{ duration: 1 }} // Animation duration
    >
      {/* Navbar */}
      <Navbar />

      {/* Quiz Title */}
      <motion.h3
        initial={{ y: -50, opacity: 0 }} // Slide down from top
        animate={{ y: 0, opacity: 1 }} // Animate to original position
        transition={{ duration: 1, delay: 0.5 }} // Delay for smooth transition
      >
        HTML Quiz
      </motion.h3>

      {/* Question 1 */}
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Slide in from left
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>Q1. What does HTML stand for?</p>
        <form>
          <input type="radio" id="a" name="q1" value="a" />
          <label htmlFor="a">a) Hyper Text Markup Language</label><br />
          <input type="radio" id="b" name="q1" value="b" />
          <label htmlFor="b">b) High Text Markup Language</label><br />
          <input type="radio" id="c" name="q1" value="c" />
          <label htmlFor="c">c) Hyperlink and Text Markup Language</label><br />
          <input type="radio" id="d" name="q1" value="d" />
          <label htmlFor="d">d) Hyper Textual Markup Language</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 2 */}
      <motion.div
        initial={{ x: 100, opacity: 0 }} // Slide in from right
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h3>Q2. Which of the following elements is used to create a hyperlink in HTML?</h3>
        <form>
          <input type="radio" id="a" name="q2" value="a" />
          <label htmlFor="a">a) &lt;link&gt;</label><br />
          <input type="radio" id="b" name="q2" value="b" />
          <label htmlFor="b">b) &lt;a&gt;</label><br />
          <input type="radio" id="c" name="q2" value="c" />
          <label htmlFor="c">c) &lt;href&gt;</label><br />
          <input type="radio" id="d" name="q2" value="d" />
          <label htmlFor="d">d) &lt;url&gt;</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 3 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }} // Slide up from bottom
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h3>Q3. Which HTML attribute is used to define inline styles?</h3>
        <form>
          <input type="radio" id="a" name="q3" value="a" />
          <label htmlFor="a">a) class</label><br />
          <input type="radio" id="b" name="q3" value="b" />
          <label htmlFor="b">b) style</label><br />
          <input type="radio" id="c" name="q3" value="c" />
          <label htmlFor="c">c) font</label><br />
          <input type="radio" id="d" name="q3" value="d" />
          <label htmlFor="d">d) styles</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 4 */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }} // Scale up from small
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h3>Q4. Which tag is used to create a numbered list in HTML?</h3>
        <form>
          <input type="radio" id="a" name="q4" value="a" />
          <label htmlFor="a">a) &lt;ul&gt;</label><br />
          <input type="radio" id="b" name="q4" value="b" />
          <label htmlFor="b">b) &lt;ol&gt;</label><br />
          <input type="radio" id="c" name="q4" value="c" />
          <label htmlFor="c">c) &lt;li&gt;</label><br />
          <input type="radio" id="d" name="q4" value="d" />
          <label htmlFor="d">d) &lt;dl&gt;</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 5 */}
      <motion.div
        initial={{ rotate: -90, opacity: 0 }} // Rotate into view
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <h3>Q5. Which HTML tag is used to define a table row?</h3>
        <form>
          <input type="radio" id="a" name="q5" value="a" />
          <label htmlFor="a">a) &lt;td&gt;</label><br />
          <input type="radio" id="b" name="q5" value="b" />
          <label htmlFor="b">b) &lt;tr&gt;</label><br />
          <input type="radio" id="c" name="q5" value="c" />
          <label htmlFor="c">c) &lt;th&gt;</label><br />
          <input type="radio" id="d" name="q5" value="d" />
          <label htmlFor="d">d) &lt;table&gt;</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>

      {/* Question 6 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Fade in and scale up
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <h3>Q6. Which HTML tag is used to define a paragraph?</h3>
        <form>
          <input type="radio" id="a" name="q6" value="a" />
          <label htmlFor="a">a) &lt;p&gt;</label><br />
          <input type="radio" id="b" name="q6" value="b" />
          <label htmlFor="b">b) &lt;para&gt;</label><br />
          <input type="radio" id="c" name="q6" value="c" />
          <label htmlFor="c">c) &lt;paragraph&gt;</label><br />
          <input type="radio" id="d" name="q6" value="d" />
          <label htmlFor="d">d) &lt;text&gt;</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </motion.div>
      </motion.div>
  );
}
