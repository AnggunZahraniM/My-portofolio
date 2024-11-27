// components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-dark text-center p-3 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Container>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </Container>
    </motion.footer>
  );
};

export default Footer;

