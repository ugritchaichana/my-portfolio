import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  IconButton,
  Link,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const iconSize = useBreakpointValue({ base: 24, md: 28 });
  
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  const location = () => {
    if (profile.location) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`, "_blank", "noreferrer,noopener");
    }
  };
  
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 6, md: 10 }}
          pb={{ base: 16, md: 24, lg: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                06
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>Let's stay in touch!</Heading>
            
            <Box px={2}>
              <Link 
                href={`mailto:${profile.email}`}
                color={`${color}.500`}
                fontWeight={600}
                fontSize={{ base: "md", md: "lg" }}
                _hover={{ textDecoration: "none", color: `${color}.600` }}
              >
                {profile.email}
              </Link>
            </Box>
            
            {profile.location && (
              <Box px={2}>
                <Text
                  color={`${color}.500`}
                  fontWeight={600}
                  fontSize={{ base: "md", md: "lg" }}
                >
                  {profile.location}
                </Text>
              </Box>
            )}

            <Center>
              <HStack 
                pt={6} 
                spacing={{ base: 6, md: 8 }}
                justify="center"
              >
                <Tooltip label="LinkedIn" hasArrow placement="top">
                  <IconButton
                    aria-label="LinkedIn"
                    variant="ghost"
                    size="lg"
                    fontSize={iconSize}
                    icon={<FaLinkedin />}
                    _hover={{
                      bg: `${color}.100`,
                      color: `${color}.500`,
                    }}
                    onClick={linkedin}
                    isRound
                  />
                </Tooltip>
                <Tooltip label="GitHub" hasArrow placement="top">
                  <IconButton
                    aria-label="GitHub"
                    variant="ghost"
                    size="lg"
                    fontSize={iconSize}
                    icon={<FaGithub />}
                    _hover={{
                      bg: `${color}.100`,
                      color: `${color}.500`,
                    }}
                    onClick={github}
                    isRound
                  />
                </Tooltip>
                <Tooltip label="Email" hasArrow placement="top">
                  <IconButton
                    aria-label="Email"
                    variant="ghost"
                    size="lg"
                    fontSize={iconSize}
                    icon={<FaEnvelope />}
                    _hover={{
                      bg: `${color}.100`,
                      color: `${color}.500`,
                    }}
                    onClick={email}
                    isRound
                  />
                </Tooltip>
                {profile.location && (
                  <Tooltip label="Location" hasArrow placement="top">
                    <IconButton
                      aria-label="Location"
                      variant="ghost"
                      size="lg"
                      fontSize={iconSize}
                      icon={<FaMapMarkerAlt />}
                      _hover={{
                        bg: `${color}.100`,
                        color: `${color}.500`,
                      }}
                      onClick={location}
                      isRound
                    />
                  </Tooltip>
                )}
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
