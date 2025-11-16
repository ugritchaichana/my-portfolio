import React, { useEffect, useState } from "react";
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";

export default function Nav({ color }) {
  const colors = {
    blue: "#3182CE",
    cyan: "#00B5D8",
    gray: "#718096",
    green: "#38A169",
    orange: "#DD6B20",
    pink: "#D53F8C",
    purple: "#805AD5",
    red: "#E53E3E",
    teal: "#319795",
    yellow: "#D69E2E",
    don: "#24F017",
  };
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  
  const animateScroll = Scroll.animateScroll;
  
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };
  
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  const scrollSettings = {
    smooth: true,
    offset: -80,
    duration: 800,
    className: "nav-link",
    activeClass: "active"
  };

  useEffect(() => {
    return () => {
      Scroll.Events.scrollEvent.remove('begin');
      Scroll.Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={{ base: 2, sm: 4 }}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <ChakraLink onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <HStack>
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              color={colors[color]} 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11"></path>
            </svg>
            
            {/* G letter */}
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              color={colors[color]} 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-2h-4"></path>
            </svg>
            
            {/* R letter */}
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              color={colors[color]} 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5"></path>
              <path d="M12 13l5 7"></path>
            </svg>
            
            {/* I letter */}
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              color={colors[color]} 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 4l0 16"></path>
            </svg>
            
            {/* T letter */}
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              color={colors[color]} 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 4l12 0"></path>
              <path d="M12 4l0 16"></path>
            </svg>
          </HStack>
        </ChakraLink>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={{ base: 1, md: 7 }}>
            {isLargerThanMD ? (
              <>
                <Button 
                  as={Link}
                  to="about"
                  variant="ghost" 
                  size={{ base: "sm", md: "md" }}
                  spy={false}
                  {...scrollSettings}
                >
                  About
                </Button>
                <Button 
                  as={Link}
                  to="skill"
                  variant="ghost" 
                  size={{ base: "sm", md: "md" }}
                  spy={false}
                  {...scrollSettings}
                >
                  Skill
                </Button>
                <Button 
                  as={Link}
                  to="education"
                  variant="ghost" 
                  size={{ base: "sm", md: "md" }}
                  spy={false}
                  {...scrollSettings}
                >
                  Education
                </Button>
                <Button 
                  as={Link}
                  to="experience"
                  variant="ghost" 
                  size={{ base: "sm", md: "md" }}
                  spy={false}
                  {...scrollSettings}
                >
                  Experience
                </Button>
                <Button 
                  as={Link}
                  to="projects"
                  variant="ghost" 
                  size={{ base: "sm", md: "md" }}
                  spy={false}
                  {...scrollSettings}
                >
                  Projects
                </Button>
                <Button 
                  as={Link}
                  to="contact"
                  variant="ghost" 
                  size={{ base: "sm", md: "md" }}
                  spy={false}
                  {...scrollSettings}
                >
                  Contact
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode} size={{ base: "sm", md: "md" }}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <IconButton
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                  aria-label="Open menu"
                  size={{ base: "sm", md: "md" }}
                />
                <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                    <DrawerBody py={4}>
                      <Stack spacing={4}>
                        <Button
                          as={Link}
                          to="about"
                          variant="ghost"
                          justifyContent="flex-start"
                          w="full"
                          onClick={onClose}
                          spy={false}
                          {...scrollSettings}
                        >
                          About
                        </Button>
                        <Button
                          as={Link}
                          to="skill"
                          variant="ghost"
                          justifyContent="flex-start"
                          w="full"
                          onClick={onClose}
                          spy={false}
                          {...scrollSettings}
                        >
                          Skill
                        </Button>
                        <Button
                          as={Link}
                          to="education"
                          variant="ghost"
                          justifyContent="flex-start"
                          w="full"
                          onClick={onClose}
                          spy={false}
                          {...scrollSettings}
                        >
                          Education
                        </Button>
                        <Button
                          as={Link}
                          to="experience"
                          variant="ghost"
                          justifyContent="flex-start"
                          w="full"
                          onClick={onClose}
                          spy={false}
                          {...scrollSettings}
                        >
                          Experience
                        </Button>
                        <Button
                          as={Link}
                          to="projects"
                          variant="ghost"
                          justifyContent="flex-start"
                          w="full"
                          onClick={onClose}
                          spy={false}
                          {...scrollSettings}
                        >
                          Projects
                        </Button>
                        <Button
                          as={Link}
                          to="contact"
                          variant="ghost"
                          justifyContent="flex-start"
                          w="full"
                          onClick={onClose}
                          spy={false}
                          {...scrollSettings}
                        >
                          Contact
                        </Button>
                      </Stack>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
