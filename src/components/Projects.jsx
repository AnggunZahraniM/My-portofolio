import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion"; // Import framer-motion
import PropFindrImage from '../images/propfindr.jpg'; // import the image files
import FurnitureImage from '../images/furniture.jpg';
import SmartScriptAIImage from '../images/smartscriptai.jpg';
import FramerFurnitureImage from '../images/furniture.jpg';
import BookGalleryImage from '../images/bookgallery.png';
import ManganyaImage from '../images/manganya.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Design Mobile APP PropFindr",
      description: "A Figma design for a mobile app showcasing property listings.",
      image: PropFindrImage,
      link: "https://www.figma.com/design/wkJvK6gl6Eq6ZEvdAoWv18/FINAL-PROJECT-_-KELOMPOK-5-(ANGGUN)?node-id=0-1&t=rxjKeTrhjyei2nnz-1",
    },
    {
      id: 2,
      title: "Design Furnicture",
      description: "A Figma design project for a furniture website.",
      image: FurnitureImage,
      link: "https://www.figma.com/design/Z31CIUDS93ThKro9Cl3x0O/Pixlayer---Class-Industry---Furnicetur-Website---Kelompok-2-(Anggun)?node-id=0-1&t=XvkoMbMeKfkuEFgN-1",
    },
    {
      id: 3,
      title: "Website Webflow SmartScriptAI",
      description: "A website designed and developed using Webflow.",
      image: SmartScriptAIImage,
      link: "https://angguns-dipa-smartscriptai-2.webflow.io/",
    },
    {
      id: 4,
      title: "Framer Furnicture",
      description: "A modern website for furniture, built with Framer.",
      image: FramerFurnitureImage,
      link: "https://frnlst.framer.website/",
    },
    {
      id: 5,
      title: "Website BOOK Gallery",
      description: "A book gallery website showcasing various book collections.",
      image: BookGalleryImage,
      link: "https://implemen-api-book.vercel.app/",
    },
    {
      id: 6,
      title: "Website Manganya",
      description: "A manga viewing platform featuring various titles.",
      image: ManganyaImage,
      link: "https://manganya-qhqr.vercel.app/",
    },
    {
      id: 7,
      title: "Game Link It",
      description: "A fun and interactive game project available on GitHub.",
      link: "https://github.com/AnggunZahra/GameProjetcLinkIt",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        {/* Fade-in animation for the heading with more spacing */}
        <motion.h2
          className="text-center mb-5"
          style={{
            fontWeight: '600',  // Bold the heading
            color: '#106EBE',   // Set text color to blue
            marginTop: '60px',   // Add top margin to create more space above the heading
            marginBottom: '50px', // Increase bottom margin to add space between heading and cards
          }}
          initial={{ opacity: 0 }}  // Start with opacity 0
          animate={{ opacity: 1 }}  // Animate to opacity 1
          transition={{ duration: 1 }}  // Smooth transition over 1 second
        >
          MY PROJECTS
        </motion.h2>
        
        <Row>
          {projects.map((project) => (
            <Col md={4} className="mb-4" key={project.id}>
              {/* Fade-in and slide-up animation for each project card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and slight offset
                whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y = 0
                transition={{ duration: 0.8 }} // Duration of the animation
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
              >
                <Card
                  style={{
                    height: '500px',  // Fixed height for all cards
                    display: 'flex',  // Ensure card body stretches to fill height
                    flexDirection: 'column', // Stack card elements vertically
                  }}
                  className="project-card"
                >
                  {/* Apply fixed size for image */}
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{
                      width: '100%',
                      height: '250px',  // Fixed height for the image
                      objectFit: 'cover', // Ensure image is cropped without stretching
                    }}
                  />
                  <Card.Body
                    style={{
                      flex: '1', // Allow card body to take remaining space
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between', // Ensure the content is spaced evenly
                      padding: '20px', // Space around the content
                    }}
                  >
                    <Card.Title
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        marginBottom: '10px', // Closer spacing with description
                        color: '#333',
                      }}
                      className="project-title"
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: '1rem',
                        color: '#666',
                      }}
                      className="project-description"
                    >
                      {project.description}
                    </Card.Text>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        alignSelf: 'center',  // Center the button
                        padding: '12px 24px', // Larger button
                        marginTop: 'auto', // Push button to the bottom
                        background: 'linear-gradient(135deg, #4a90e2 0%, #007bff 100%)', // Blue gradient
                        border: 'none', // Remove border
                        borderRadius: '25px', // Rounded corners
                      }}
                    >
                      View Project
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Styles for hover effect */}
      <style>
        {`
          .project-card:hover {
            transform: translateY(-10px); /* Lift the card on hover */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add a shadow for effect */
          }
          .project-title:hover {
            color: #007bff; /* Change color of title on hover */
          }
          .project-description:hover {
            color: #555; /* Darker color for description on hover */
          }
          .btn:hover {
            transform: scale(1.1); /* Slightly scale the button on hover */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow effect on hover */
            background: linear-gradient(135deg, #0063cc 0%, #3a8ee6 100%); /* Darker gradient on hover */
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
