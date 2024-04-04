import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState } from "react";
import ProjectsArray from "./ProjectsArray";
import OtherProjectsArray from "./OtherProjectsArray";
import TagsArray from "./TagsArray";

export default function Projects({ color }) {
    const projects = ProjectsArray();
    const others = OtherProjectsArray();
    const options = TagsArray("ProjectsTags");
    
    const [selected, setSelected] = useState("All");

    const handleSelected = (value) => {
      setSelected(value);
    };
    
  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project,i) => (
              <Fade bottom key={i+1}>
                <Card
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button,i) => (
                          <a key={i+1} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge,i) => (
                          <Badge
                            key={i+1}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={selected === "All" ? `${color}` : "gray"}
                onClick={() => handleSelected("All")}
              >
                All
              </Button>
              {options.map((option,i) => (
                <Button
                  key={i+1}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center> */}
          {/* <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other,i) => (
                <Fade bottom key={i+1}>
                  <Card>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button,i) => (
                            <Link
                              key={i+1}
                              href={button.href}
                              color={`${color}.400`}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge,i) => (
                            <Badge
                              my={2}
                              key={i+1}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid> */}
        </Stack>
      </Container>
    </>
  );
}
