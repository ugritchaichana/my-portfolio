import React, { useRef } from "react";
import {
  Slide,
  Box,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const ContactForm = ({ isOpen, slideRef, handleOutsideClick }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSend = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-back-zaz7.onrender.com/api/contact",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
        }
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <Slide
      direction="right"
      in={isOpen}
      style={{ zIndex: 10, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
      onClick={handleOutsideClick}
    >
      <Box
        ref={slideRef}
        position="fixed"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        w="300px"
        bg="#171923"
        p="4"
        color="white"
        textAlign="center"
        style={{
          borderRadius: "10px",
          boxShadow: "none",
          overflow: "hidden",
          pointerEvents: "auto",
        }}
      >
        <Stack spacing={4}>
          <Text fontSize="xl" as="b">
            Contact
          </Text>
          <InputGroup>
            <InputLeftAddon bg="black" w="73px">
              Name
            </InputLeftAddon>
            <Input type="text" placeholder="Name Surename" ref={nameRef} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bg="black" w="73px">
              Email
            </InputLeftAddon>
            <Input
              type="email"
              placeholder="example@email.com"
              ref={emailRef}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bg="black" w="73px">
              +66
            </InputLeftAddon>
            <Input type="tel" placeholder="123456789" ref={phoneRef} />
          </InputGroup>
        </Stack>
        <Button mt="4" bg="#2D3748" color="white" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Slide>
  );
};

export default ContactForm;
