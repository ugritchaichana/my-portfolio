import { 
  Divider, 
  Stack, 
  Text, 
  Container, 
  Box, 
  HStack,
  useColorModeValue 
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
  const textColor = useColorModeValue("gray.600", "gray.400");
  
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 6, md: 10 }}
          pb={{ base: 16, md: 24, lg: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text 
            color={textColor} 
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            px={{ base: 4, md: 8 }}
            lineHeight="tall"
          >
            {profile.about}
          </Text>
        </Stack>
      </Container>
    </>
  );
}
