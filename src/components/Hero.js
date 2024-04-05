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
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import imgResume from "./img/Ugrit_Resume.png";
import imgTranscript from "./img/Ugrit_Transcript.jpg";

export default function Header({ color }) {
  const profile = ProfileArray();
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

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
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {profile.headerDesc}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <HStack>
              <ModalResume />
              <ModalTranscript />
            </HStack>
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

function ModalTranscript() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const transcript_dl = () => {
    window.location.href = `https://drive.google.com/uc?export=download&id=1mPui2TficTuLCsAIYBevNMOpZf-ol4AR`;
  };

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Button onClick={onOpen} colorScheme="purple" variant="solid">
          Transcript
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="500px">
          <ModalHeader>Transcript</ModalHeader>
          <ModalCloseButton />
          <Box>
            <Image src={imgTranscript} maxW="100%" />
          </Box>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={transcript_dl}>
              Download
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ModalResume() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const resume_dl = () => {
    window.location.href = `https://drive.google.com/uc?export=download&id=1mPui2TficTuLCsAIYBevNMOpZf-ol4AR`;
  };

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Button onClick={onOpen} colorScheme="purple" variant="solid">
          Resume
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="500px">
          <ModalHeader>Resume</ModalHeader>
          <ModalCloseButton />
          <Box>
            <Image src={imgResume} maxW="100%" />
          </Box>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={resume_dl}>
              Download
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
