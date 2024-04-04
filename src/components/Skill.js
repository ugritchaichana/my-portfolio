import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiChakraui, SiMicrosoftazure } from "react-icons/si";

const SkillCard = ({ icon, text }) => (
  <Fade bottom distance="100px">
    <Card
      width="150px"
      height="auto"
      _hover={{
        boxShadow: "0px 0px 20px rgba(220, 220, 220, 0.7)", // เพิ่มเรืองแสงสีข้าวเมื่อ hover
        transition: "box-shadow 0.3s ease", // เพิ่มเอฟเฟกต์ transition เมื่อ hover
      }}
    >
      <CardBody display="flex" alignItems="center" justifyContent="center">
        {icon}
        <Text>{text}</Text>
      </CardBody>
    </Card>
  </Fade>
);

export default function Skill({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="skill">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Skill</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack
            px={4}
            spacing={15}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <SkillCard
              icon={<FaHtml5 style={{ marginRight: "10px" }} size={30} />}
              text="HTML"
            />
            <SkillCard
              icon={<FaCss3Alt style={{ marginRight: "10px" }} size={30} />}
              text="CSS"
            />
            <SkillCard
              icon={<FaJs style={{ marginRight: "10px" }} size={30} />}
              text="Javascript"
            />
          </Stack>
          <Stack
            px={4}
            spacing={15}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <SkillCard
              icon={<FaBootstrap style={{ marginRight: "10px" }} size={30} />}
              text="Bootstrap"
            />
            <SkillCard
              icon={<SiTailwindcss style={{ marginRight: "10px" }} size={30} />}
              text="Tailwind"
            />
            <SkillCard
              icon={<SiChakraui style={{ marginRight: "10px" }} size={30} />}
              text="Chakra UI"
            />
          </Stack>
          <Stack
            px={4}
            spacing={15}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <SkillCard
              icon={<FaPhp style={{ marginRight: "10px" }} size={30} />}
              text="PHP"
            />
            <SkillCard
              icon={<FaJava style={{ marginRight: "10px" }} size={30} />}
              text="Java"
            />
            <SkillCard
              icon={
                <SiMicrosoftazure style={{ marginRight: "10px" }} size={30} />
              }
              text="Azure"
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
