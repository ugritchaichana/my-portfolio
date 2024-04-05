import React, { useRef, useEffect } from "react";
import { ChakraProvider, Box, Button, useDisclosure } from "@chakra-ui/react";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import ContactForm from "./components/ContactForm";

function App() {
  const color = "purple";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const slideRef = useRef();

  const handleOutsideClick = (event) => {
    if (!slideRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleCloseSlide = () => {
    onClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      handleCloseSlide();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Skill color={color} />
      <Education color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
      <Box
        position="fixed"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        zIndex="999"
        style={{ display: isOpen ? "none" : "block" }}
      >
        <Button
          onClick={onOpen}
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "10px",
            transform: "rotate(270deg)",
            position: "absolute",
            top: "calc(50% - 25px)",
            right: -35,
          }}
        >
          Contact
        </Button>
      </Box>

      <div onClick={handleOutsideClick}>
        <ContactForm
          isOpen={isOpen}
          slideRef={slideRef}
          handleOutsideClick={handleOutsideClick}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
