import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth="1px"
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container 
        as={Stack} 
        maxW={"6xl"} 
        py={{ base: 4, md: 6 }} 
        px={{ base: 4, md: 8 }}
        spacing={2}
        align="center"
      >
        <HStack spacing={2} justify="center">
          <Text fontSize={{ base: "xs", md: "sm" }}>
            Made by Ugrit Chaichana
          </Text>
        </HStack>
        <Text fontSize={{ base: "xs", md: "sm" }}>
          © 2024 All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
