import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Image,
  HStack,
  VStack,
  useBreakpointValue,
  IconButton,
  useColorModeValue,
  Flex,
  Center,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import imgResume from "./img/Ugrit_Chaichana_Resume.webp";
import imgTranscript from "./img/Ugrit_Chaichana_Transcript.webp";
import resumePNG from "./img/Ugrit_Chaichana_Resume.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FiZoomIn, FiZoomOut, FiMaximize, FiDownload } from "react-icons/fi";
import { useRef } from "react";

export default function Header({ color }) {
  const profile = ProfileArray();
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const buttonStackDirection = useBreakpointValue({ base: "column", sm: "row" });

  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 6, md: 10, lg: 14 }}
          pb={{ base: 12, md: 24, lg: 36 }}
          pt={{ base: 28, md: 36, lg: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
            px={{ base: 2, md: 0 }}
          >
            {profile.professionalSummary?.split('.')[0] + '.' || profile.headerDesc}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Stack direction={buttonStackDirection} spacing={{ base: 2, sm: 3 }}>
              <ModalResume color={color} />
              <ModalTranscript color={color} />
            </Stack>
            <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

function ModalTranscript({ color }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const transformComponentRef = useRef(null);
  
  const transcript_dl = () => {
    const link = document.createElement('a');
    link.href = resumePNG;
    link.download = 'Transcript Ugrit Chaichana.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const modalBg = useColorModeValue("white", "gray.800");
  const btnBg = useColorModeValue(`${color}.500`, `${color}.400`);
  const btnHoverBg = useColorModeValue(`${color}.600`, `${color}.300`);

  return (
    <>
      <Button onClick={onOpen} colorScheme={color} variant="solid" w="full">
        Transcript
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent bg={modalBg} borderRadius="xl" boxShadow="xl">
          <ModalHeader borderBottomWidth="1px" pb={3}>
            <Text>Academic Transcript</Text>
          </ModalHeader>
          <ModalCloseButton />
          
          <Box p={4} maxH={{ base: "70vh", md: "80vh" }} overflow="hidden" display="flex" flexDirection="column">
            <TransformWrapper
              initialScale={0.8}
              initialPositionX={0}
              initialPositionY={0}
              minScale={0.5}
              maxScale={5}
              centerOnInit={true}
              wheel={{ step: 0.05 }}
              pinch={{ step: 1 }}
              alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
              limitToBounds={false}
              ref={transformComponentRef}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <HStack spacing={2} mb={3} justifyContent="center">
                    <IconButton
                      onClick={() => zoomIn()}
                      icon={<FiZoomIn />}
                      aria-label="Zoom In"
                      size="sm"
                      colorScheme={color}
                    />
                    <IconButton
                      onClick={() => zoomOut()}
                      icon={<FiZoomOut />}
                      aria-label="Zoom Out"
                      size="sm"
                      colorScheme={color}
                    />
                    <IconButton
                      onClick={() => {
                        resetTransform();
                      }}
                      icon={<FiMaximize />}
                      aria-label="Full View"
                      size="sm"
                      colorScheme={color}
                    />
                    <IconButton
                      icon={<FiDownload />}
                      size="sm"
                      colorScheme={color}
                      onClick={transcript_dl}
                      aria-label="Download"
                    />
                  </HStack>
                  
                  <Center flex="1" h="100%">
                    <Box 
                      borderRadius="md" 
                      overflow="hidden"
                      boxShadow="sm"
                      cursor="grab"
                      _active={{ cursor: "grabbing" }}
                      h="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <TransformComponent
                        wrapperStyle={{ 
                          width: "100%", 
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                        contentStyle={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Image src={imgTranscript} alt="Transcript" />
                      </TransformComponent>
                    </Box>
                  </Center>
                </>
              )}
            </TransformWrapper>
          </Box>
          
          <ModalFooter borderTopWidth="1px" pt={3}>
            <Text fontSize="xs" color="gray.500" flex="1">Use your finger to drag or slide to enlarge the image.</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ModalResume({ color }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const transformComponentRef = useRef(null);
  
  const resume_dl = () => {
    const link = document.createElement('a');
    link.href = resumePNG;
    link.download = 'Ugrit_Chaichana_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const modalBg = useColorModeValue("white", "gray.800");
  const btnBg = useColorModeValue(`${color}.500`, `${color}.400`);
  const btnHoverBg = useColorModeValue(`${color}.600`, `${color}.300`);

  return (
    <>
      <Button onClick={onOpen} colorScheme={color} variant="solid" w="full">
        Resume
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent bg={modalBg} borderRadius="xl" boxShadow="xl">
          <ModalHeader borderBottomWidth="1px" pb={3}>
            <Text>Professional Resume</Text>
          </ModalHeader>
          <ModalCloseButton />
          
          <Box p={4} maxH={{ base: "70vh", md: "80vh" }} overflow="hidden" display="flex" flexDirection="column">
            <TransformWrapper
              initialScale={0.8}
              initialPositionX={0}
              initialPositionY={0}
              minScale={0.5}
              maxScale={5}
              centerOnInit={true}
              wheel={{ step: 0.05 }}
              pinch={{ step: 1 }}
              alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
              limitToBounds={false}
              ref={transformComponentRef}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <HStack spacing={2} mb={3} justifyContent="center">
                    <IconButton
                      onClick={() => zoomIn()}
                      icon={<FiZoomIn />}
                      aria-label="Zoom In"
                      size="sm"
                      colorScheme={color}
                    />
                    <IconButton
                      onClick={() => zoomOut()}
                      icon={<FiZoomOut />}
                      aria-label="Zoom Out"
                      size="sm"
                      colorScheme={color}
                    />
                    <IconButton
                      onClick={() => {
                        resetTransform();
                      }}
                      icon={<FiMaximize />}
                      aria-label="Full View"
                      size="sm"
                      colorScheme={color}
                    />
                    <IconButton
                      icon={<FiDownload />}
                      size="sm"
                      colorScheme={color}
                      onClick={resume_dl}
                      aria-label="Download"
                    />
                  </HStack>
                  
                  <Center flex="1" h="100%">
                    <Box 
                      borderRadius="md" 
                      overflow="hidden"
                      boxShadow="sm"
                      cursor="grab"
                      _active={{ cursor: "grabbing" }}
                      h="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <TransformComponent
                        wrapperStyle={{ 
                          width: "100%", 
                          height: "100%", 
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                        contentStyle={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Image src={imgResume} alt="Resume" />
                      </TransformComponent>
                    </Box>
                  </Center>
                </>
              )}
            </TransformWrapper>
          </Box>
          
          <ModalFooter borderTopWidth="1px" pt={3}>
            <Text fontSize="xs" color="gray.500" flex="1">Use your finger to drag or slide to enlarge the image.</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
