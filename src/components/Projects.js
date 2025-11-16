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
  Flex,
  SimpleGrid,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import FadeIn from "./FadeIn";
import ProjectsArray from "./ProjectsArray";

const ProjectCard = ({ project, color, cardWidth, badgeSize }) => {
  const bgOverlay = useColorModeValue(
    `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6))`,
    `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))`
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <FadeIn>
      <Card
        width={cardWidth}
        height="100%"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        transition="all 0.4s ease"
        bg={cardBg}
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "2xl",
        }}
        position="relative"
      >
        <Box position="relative" height="200px">
          <Image 
            objectFit="cover" 
            src={project.image} 
            height="100%"
            width="100%"
          />
          <Box 
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundImage={bgOverlay}
          />
          <Box 
            position="absolute"
            bottom="0"
            left="0" 
            width="100%"
            p={4}
          >
            <Heading 
              size="md" 
              color="white" 
              textShadow="0px 2px 4px rgba(0,0,0,0.3)"
            >
              {project.name}
            </Heading>
          </Box>
        </Box>
        
        <CardBody py={4}>
          <VStack spacing={4} align="stretch">
            <Text 
              fontSize={{ base: "sm", md: "md" }}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {project.description}
            </Text>
            
            <Wrap spacing={1.5}>
              {project.badges.map((badge, i) => (
                <WrapItem key={i}>
                  <Badge 
                    colorScheme={badge.colorScheme}
                    fontSize={badgeSize}
                    py={0.5}
                    px={1.5}
                    borderRadius="md"
                    boxShadow="0 1px 2px rgba(0,0,0,0.05)"
                  >
                    {badge.text}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
            
            <Flex 
              wrap="wrap"
              gap={2}
              mt={1}
              justifyContent="flex-start"
            >
              {project.buttons.map((button, i) => (
                <a key={i} href={button.href} target="_blank" rel="noopener noreferrer">
                  <Button 
                    colorScheme={color}
                    variant="outline"
                    size="sm"
                    borderRadius="lg"
                    fontWeight="medium"
                    _hover={{
                      bg: `${color}.50`,
                      transform: "translateY(-1px)",
                      boxShadow: "sm"
                    }}
                  >
                    {button.text}
                  </Button>
                </a>
              ))}
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default function Projects({ color }) {
  const projects = ProjectsArray();
  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2 });
  const cardWidth = useBreakpointValue({ base: "100%", md: "100%" });
  const spacing = useBreakpointValue({ base: 6, md: 8 });
  const badgeSize = useBreakpointValue({ base: "2xs", md: "xs" });

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 16, md: 24, lg: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          
          <Box px={{ base: 2, md: 4 }}>
            <SimpleGrid columns={columns} spacing={spacing}>
              {projects.map((project, i) => (
                <ProjectCard 
                  key={i} 
                  project={project} 
                  color={color}
                  cardWidth={cardWidth}
                  badgeSize={badgeSize}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
