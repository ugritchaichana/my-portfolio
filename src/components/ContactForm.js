import React, { useRef, useState } from "react";
import {
  Slide,
  Box,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";
import axios from "axios";

const ContactForm = ({ isOpen, slideRef, handleOutsideClick }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const [sendSuccess, setSendSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};

    if (!nameRef.current.value.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailRef.current.value)) {
      newErrors.email = true;
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneRef.current.value)) {
      newErrors.phone = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e, field) => {
    const value = e.target.value;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: false,
    }));
  };

  const handleSend = async () => {
    if (!validateInputs()) {
      return;
    }

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
      setSendSuccess(true);
      setTimeout(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        setErrors({});
        setSendSuccess(false);
      }, 3000);
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
          <InputGroup borderColor={errors.name && "red"}>
            <InputLeftAddon bg="black" w="73px">
              Name
            </InputLeftAddon>
            <Input
              type="text"
              placeholder="Name Surename"
              ref={nameRef}
              onChange={(e) => handleChange(e, "name")}
            />
            {errors.name && (
              <InputRightElement>
                <Icon as={RiErrorWarningLine} color="red" />
              </InputRightElement>
            )}
          </InputGroup>
          <InputGroup borderColor={errors.email && "red"}>
            <InputLeftAddon bg="black" w="73px">
              Email
            </InputLeftAddon>
            <Input
              type="email"
              placeholder="example@email.com"
              ref={emailRef}
              onChange={(e) => handleChange(e, "email")}
            />
            {errors.email && (
              <InputRightElement>
                <Icon as={RiErrorWarningLine} color="red" />
              </InputRightElement>
            )}
          </InputGroup>
          <InputGroup borderColor={errors.phone && "red"}>
            <InputLeftAddon bg="black" w="73px">
              Tel
            </InputLeftAddon>
            <Input
              type="number"
              placeholder="123456789"
              ref={phoneRef}
              onChange={(e) => handleChange(e, "phone")}
            />
            {errors.phone && (
              <InputRightElement>
                <Icon as={RiErrorWarningLine} color="red" />
              </InputRightElement>
            )}
          </InputGroup>
        </Stack>
        {!sendSuccess ? (
          <Button
            mt="4"
            bg="#2D3748"
            color="white"
            _hover={{ bg: "#1A202C" }}
            _active={{ bg: "#1A202C" }}
            onClick={handleSend}
          >
            Send
          </Button>
        ) : (
          <Button
            mt="4"
            bg="#68D391"
            color="#171923"
            _hover={{ bg: "#48BB78" }}
            _active={{ bg: "#48BB78" }}
            disabled
          >
            Send Success
          </Button>
        )}
      </Box>
    </Slide>
  );
};

export default ContactForm;
