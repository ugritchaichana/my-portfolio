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
  FaBootstrap,
  FaLaravel,
  FaGit,
  FaReact
} from "react-icons/fa";
import {
  SiChakraui,
  SiMicrosoftazure,
  SiCodeigniter,
  SiTypescript,
  SiDjango,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiRadixui,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import {
  GrMysql
} from "react-icons/gr";
import {
  DiGoogleCloudPlatform
} from "react-icons/di";


const SkillCard = ({ icon, text }) => (
  <Fade bottom distance="100px">
    <Card
      width="150px"
      height="auto"
      _hover={{
        boxShadow: "0px 0px 20px rgba(220, 220, 220, 0.7)",
        transition: "box-shadow 0.3s ease",
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
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} pb={{ base: 20, md: 36 }} >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Stack/Tools</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Stack  px={4} spacing={15} direction="row" alignItems="center" justifyContent="center" >
            <SkillCard icon={<SiDjango style={{ marginRight: "10px" }} size={30} />} text="Django" />
            <SkillCard icon={<SiTypescript style={{ marginRight: "10px" }} size={30} />} text="TypeScript" />
            <SkillCard icon={<FaLaravel style={{ marginRight: "10px" }} size={30} />} text="Laravel" />
            <SkillCard icon={<SiCodeigniter style={{ marginRight: "10px" }} size={30} />} text="CodeIgniter" />
          </Stack>

          <Stack px={4} spacing={15} direction="row" alignItems="center" justifyContent="center">
            <SkillCard icon={<FaReact style={{ marginRight: "10px" }} size={30} />} text="React" />
            <SkillCard icon={<SiRadixui style={{ marginRight: "10px" }} size={30} />} text="Radix UI" />
            <SkillCard icon={<SiChakraui style={{ marginRight: "10px" }} size={30} />} text="Chakra UI" />
            <SkillCard icon={<SiTailwindcss style={{ marginRight: "10px" }} size={30} />} text="Tailwind" />
          </Stack>

          <Stack px={4} spacing={15} direction="row" alignItems="center" justifyContent="center">
            <SkillCard icon={<FaBootstrap style={{ marginRight: "10px" }} size={30} />} text="Bootstrap" />
            <SkillCard icon={<SiPostgresql style={{ marginRight: "10px" }} size={30} />} text="PostgreSQL" />
            <SkillCard icon={<SiMongodb style={{ marginRight: "10px" }} size={30} />} text="MongoDB" />
            <SkillCard icon={<GrMysql style={{ marginRight: "10px" }} size={30} />} text="MySQL" />
          </Stack>
          
          <Stack px={4} spacing={15} direction="row" alignItems="center" justifyContent="center">
            <SkillCard icon={<DiGoogleCloudPlatform style={{ marginRight: "10px" }} size={30} />} text="GCP" />
            <SkillCard icon={<SiMicrosoftazure style={{ marginRight: "10px" }} size={30} />} text="Azure" />
            <SkillCard icon={<FaGit style={{ marginRight: "10px" }} size={30} />} text="GIT" />
            <SkillCard icon={<SiTensorflow style={{ marginRight: "10px" }} size={30} />} text="TensorFlow" />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
