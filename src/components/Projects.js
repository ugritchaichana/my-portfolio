import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ProjectsArray from "./ProjectsArray";

export default function Projects({ color }) {
  const projects = ProjectsArray();

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
            {projects.map((project, i) => (
              <Fade bottom key={i + 1}>
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
                        {project.buttons.map((button, i) => (
                          <a key={i + 1} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge, i) => (
                          <Badge key={i + 1} colorScheme={badge.colorScheme}>
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
        </Stack>
      </Container>
    </>
  );
}
