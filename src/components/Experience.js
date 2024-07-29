import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";
import SynerryLogo from './img/Synerry Logo.png';
// import SynerryLogo from './img/SynerryLogo.jpg';


export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        {/* <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option, i) => (
                <Button
                  key={i + 1}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => exp.tags.includes(selected))
              .map((exp, i) => (
                <Fade bottom key={i + 1}>
                  <Card key={exp.company} size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        {exp.badges.map((badge, i) => (
                          <Badge key={i + 1} colorScheme={badge.colorScheme}>
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack> */}


        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            <Fade>
              <Card size="sm">
              <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={SynerryLogo} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>Full-Stack Web Developer (Trainee)</Text>
                            <Text>Synerry Corporation (Thailand) Co., Ltd.</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          May - Aug 2024
                        </Text>
                      </Flex>
              </CardHeader>
              <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                            <ListItem>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              /><b>Description : </b>Completed an internship as a Full Stack Developer, focusing on web application development. Engaged in Agile/Scrum processes and code reviews. Managed deadlines, contributed to task planning, and tracked KPIs for performance evaluation.
                            </ListItem>
                            <ListItem>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              /><b>Achievements :</b> Learned new things and developed both work skills and social skills. Gained a lot of experience by working on real projects that the company is currently developing.
                            </ListItem>
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        <Badge bg='#F05340'>Laravel</Badge>
                        <Badge bg='#F00000'>CodeIgniter</Badge>
                        <Badge bg='#3178C6'>TypeScript</Badge>
                        <Badge bg='#00758F'>MySQL</Badge>
                        <Badge bg='#A91D22'>SQL Server</Badge>
                        <Badge bg='#FF6C37'>Postman</Badge>
                        <Badge bg='#E24329'>GitLab</Badge>
                        <Badge bg='#F06A6A'>Asana</Badge>
                        <Badge bg='#00BFA5'>Agile/Scrum</Badge>
                      </HStack>
                    </CardFooter>
              </Card>
            </Fade>
          </Stack>




        </Stack>
      </Container>
    </>
  );
}
