import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills"; 
import Footer from "./components/Footer";

// App.jsx file with inline CSS using <style> tag
const App = () => {
  return (
    <div>
      {/* Inline CSS styles */}
      <style>
        {`
          /* Apply global styles */
          html, body {
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif; /* Set font family for all text */
            display: flex;
            flex-direction: column;
          }

          body {
            background-color: #FFFFFF; /* Set background color to white */
          }

          /* Set text color for headers */
          h2, h3, h4, h5, h6 {
            color: #106EBE; /* Blue color for headers */
          }

          /* Custom styles for sections */
          section {
            padding: 40px 0;
          }

          /* Navbar styles */
          nav {
            background-color: #333;
            color: #fff;
          }

          /* Hero Section styles */
          #hero {
            background: #f7f7f7;
            padding: 60px 0;
            text-align: center;
          }

          /* Button styles */
          .btn-primary {
            background: linear-gradient(135deg, #4a90e2 0%, #007bff 100%);
            border: none;
            border-radius: 25px;
            padding: 12px 24px;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .btn-primary:hover {
            background: linear-gradient(135deg, #0063cc 0%, #3a8ee6 100%);
            transform: scale(1.05);
          }

          /* Main content should take up available space */
          .main-content {
            flex: 1;
          }

          /* Footer styles */
          footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: auto; /* Push footer to the bottom */
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* My Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <div className="main-content">
        <Footer />
      </div>
    </div>
  );
};

export default App;

