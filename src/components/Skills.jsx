import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion"; // Import Framer Motion
import './Skills.css'; // Import the CSS file

// Variants for fade-up animation
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and move down 50px
  visible: { opacity: 1, y: 0 }, // Fade in and move to the original position
};

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="my-5"
      style={{
        background: "#FFFFFF", // Set background to white
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <motion.h2
        className="text-center mb-5"
        style={{
          fontSize: "36px", // Larger text size
          fontFamily: "'Roboto', sans-serif",
          letterSpacing: "2px",
          color: "#106EBE", // Set text color to new blue
          textAlign: "center", // Ensure text is centered
          marginTop: "0px", // Remove top margin
          fontWeight: '600', // Set font weight to 600 for a thicker font
        }}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
        transition={{ duration: 1, delay: 0.5 }}
      >
        MY SKILLS
      </motion.h2>

      <Row className="justify-content-center">
        {/* Programming Section */}
        <Col md={5} lg={4} className="mb-4">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="skill-card">
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "22px", // Adjusted title size
                    color: "#106EBE", // Set text color to new blue
                  }}
                >
                  Programming
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "18px", // Slightly increased text size
                    color: "#555",
                  }}
                >
                  I have a solid foundation in basic React development. I understand the
                  core concepts of React, such as components, state, and props, and I
                  have worked on a few small projects using React. I am always looking to
                  expand my knowledge and apply React in more complex applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Tools Section */}
        <Col md={5} lg={4} className="mb-4">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Card className="skill-card">
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "22px", // Adjusted title size
                    color: "#106EBE", // Set text color to new blue
                  }}
                >
                  Tools
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "18px", // Slightly increased text size
                    color: "#555",
                  }}
                >
                  I am proficient in using <span className="highlight">Figma</span> for UI/UX design, 
                  creating intuitive and visually appealing interfaces. Additionally, I am familiar with 
                  <span className="highlight">Webflow</span> and <span className="highlight">Framer</span> 
                  for building interactive websites with ease. Although I am still learning, I can utilize 
                  these tools for basic design and web development tasks.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Skills;

