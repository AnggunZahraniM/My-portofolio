import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css"; 
import videoSrc from "/src/videos/apapun.mp4"; // Import the video file

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      className="text-dark p-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#FFFFFF", // White background
      }}
    >
      <Container fluid className="px-4"> 
        <Row className="align-items-center">
          {/* Text Section */}
          <Col xs={12} md={6} className="text-start mb-3 mb-md-0"> {/* Reduced bottom margin */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="fw-bold"
              style={{ fontSize: "3rem", color: "#106EBE" }} // Primary Blue text
            >
              Hi, I'm Anggun Zahrani Mutiara
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-3"
              style={{
                fontSize: "1.4rem", // Adjust font size
                lineHeight: "1.6",
                maxWidth: "90%", // Adjusted maxWidth for better text fit
              }}
            >
              A passionate <span className="text-primary">UI/UX Designer</span> and
              web developer skilled in creating intuitive and aesthetic digital
              experiences. I have hands-on experience building responsive
              websites using <strong>React</strong> and enjoy crafting clean,
              functional, and engaging user interfaces.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-4"
            >
              <a
                href="#projects"
                className="btn"
                style={{
                  fontWeight: "bold",
                  padding: "14px 28px",
                  fontSize: "1.1rem",
                  borderRadius: "30px",
                  background: "linear-gradient(90deg, #00C9FF, #92FE9D)", // Gradient background
                  color: "#FFFFFF",
                  border: "none",
                  textDecoration: "none",
                  width: "250px", // Fixed width
                  display: "inline-block", // Ensures it behaves like a block element
                  transition: "background 0.3s ease, transform 0.3s ease", // Smooth transition
                  textAlign: "center", // Center text inside the button
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)"; // Hover effect: slightly enlarge
                  e.target.style.background = "linear-gradient(90deg, #92FE9D, #00C9FF)"; // Change direction on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)"; // Reset size
                  e.target.style.background = "linear-gradient(90deg, #00C9FF, #92FE9D)"; // Reset gradient
                }}
              >
                View My Projects
              </a>
            </motion.div>
          </Col>

          {/* Video Section */}
          <Col xs={12} md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                width: "100%",
                maxWidth: "700px",  // Increased video size
                height: "auto",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "0 auto", // Center the video
                marginBottom: "1.5rem", // Adjusted margin bottom
              }}
            >
              <video
                src={videoSrc} // Use the imported video file
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </Col>
        </Row>

        {/* Scrolling Text Section */}
        <motion.div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginTop: "30px",
            fontSize: "1.4rem",
            color: "#003366", // Dark blue text
          }}
        >
          <motion.span
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {/* Add scrolling text content here */}
          </motion.span>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default HeroSection;
