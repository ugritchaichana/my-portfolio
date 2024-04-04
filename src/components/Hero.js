import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import imgResume from "./img/Ugrit_Resume.png";

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
            <ModalResume />
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

function ModalResume() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const resume_dl = () => {
    window.location.href = `https://drive.google.com/uc?export=download&id=1mPui2TficTuLCsAIYBevNMOpZf-ol4AR`;
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme="purple" variant="solid">
        Resume
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="500px">
          <ModalHeader>Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
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
