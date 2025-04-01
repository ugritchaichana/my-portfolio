import React, { useRef } from "react";
import { ChakraProvider, Box, useDisclosure, CSSReset } from "@chakra-ui/react";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import theme from "./theme";

function App() {
  const color = "purple";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const slideRef = useRef();

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box position="relative" overflowX="hidden">
        <Nav color={color} />
        <Header color={color} />
        <About color={color} />
        <Skill color={color} />
        <Education color={color} />
        <Experience color={color} />
        <Projects color={color} />
        <Contact color={color} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
