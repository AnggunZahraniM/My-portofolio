import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Container>
        <motion.h2
          className="text-center mb-4 fw-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          MY Social Media
        </motion.h2>
        <div className="text-center">
          <motion.a
            href="https://github.com/AnggunZahraniM"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4"
            whileHover={{
              scale: 1.3,
              rotate: 15,
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              color: "#333",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <FaGithub size={60} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/anggun-zahrani-332a0026a/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4"
            whileHover={{
              scale: 1.3,
              rotate: 15,
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              color: "#0e76a8",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <FaLinkedin size={60} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/celestiadreamsv/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.3,
              rotate: 15,
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              color: "#E4405F",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <FaInstagram size={60} />
          </motion.a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
