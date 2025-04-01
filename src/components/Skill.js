import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  useBreakpointValue,
  Heading,
  VStack,
  useColorModeValue,
  Flex,
  Wrap,
  WrapItem,
  Badge,
} from "@chakra-ui/react";
import FadeIn from "./FadeIn";
import { useState, useEffect } from "react";
import SkillArray from "./SkillArray";

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as DiIcons from "react-icons/di";

const SkillCard = ({ icon, text, cardWidth }) => (
  <FadeIn>
    <Card
      width={cardWidth}
      height="100%"
      borderRadius="lg"
      boxShadow="md"
      _hover={{
        transform: "translateY(-5px)",
        transition: "transform 0.3s ease",
        boxShadow: "xl"
      }}
    >
      <CardBody 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        flexDirection={{ base: "column", sm: "column" }}
        py={4}
        px={3}
        gap={3}
        textAlign="center"
      >
        <Box 
          fontSize={{ base: "2xl", md: "3xl" }}
          color="purple.500"
        >
          {icon}
        </Box>
        <Text 
          fontWeight="medium"
          fontSize={{ base: "sm", md: "md" }}
        >
          {text}
        </Text>
      </CardBody>
    </Card>
  </FadeIn>
);

const OverviewCategoryCard = ({ title, skills, icon, color, cardWidth }) => (
  <FadeIn>
    <Card
      width={cardWidth}
      height="100%"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "xl",
      }}
      position="relative"
      overflow="hidden"
    >
      <CardHeader pb={2}>
        <Flex alignItems="center" gap={3}>
          <Box 
            fontSize={{ base: "3xl", md: "4xl" }}
            color={`${color}.500`}
          >
            {icon}
          </Box>
          <Heading size="md">{title}</Heading>
        </Flex>
      </CardHeader>
      <CardBody pt={2}>
        <Wrap spacing={2}>
          {skills.map((skill, idx) => (
            <WrapItem key={idx}>
              <Badge
                colorScheme={skill.colorScheme || color}
                fontSize="sm"
                py={1.5}
                px={2}
                borderRadius="md"
                display="flex"
                alignItems="center"
                gap={1.5}
              >
                {skill.icon}
                {skill.name}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </CardBody>
    </Card>
  </FadeIn>
);

export default function Skill({ color }) {
  const { categories, skills } = SkillArray();
  const cardWidth = useBreakpointValue({ base: "xs", md: "2xl" });
  
  const headingColor = `${color}.400`;

  const getIcon = (iconName) => {
    const iconLibs = {
      'Fa': FaIcons,
      'Si': SiIcons,
      'Gr': GrIcons,
      'Di': DiIcons
    };
    
    for (const prefix in iconLibs) {
      if (iconName.startsWith(prefix)) {
        const IconComponent = iconLibs[prefix][iconName];
        return IconComponent ? <IconComponent /> : null;
      }
    }
    
    return null;
  };

  if (!categories || categories.length === 0) {
    return null;
  }
  
  const getSkillsByCategory = () => {
    const skillsByCategory = {};
    
    categories.forEach(category => {
      if (category.name !== "Overview") {
        skillsByCategory[category.name] = [];
      }
    });
    
    skills.forEach(skill => {
      if (skill.category !== "Overview") {
        skillsByCategory[skill.category].push({
          name: skill.name,
          icon: getIcon(skill.icon),
          colorScheme: getSkillColorScheme(skill.category)
        });
      }
    });
    
    return skillsByCategory;
  };
  
  const getSkillColorScheme = (category) => {
    switch(category) {
      case "Frontend": return "blue";
      case "Backend": return "green";
      case "Database": return "purple";
      case "Cloud & DevOps": return "orange";
      case "Tools & Others": return "red";
      default: return color;
    }
  };
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case "Frontend": return <FaIcons.FaCode />;
      case "Backend": return <FaIcons.FaServer />;
      case "Database": return <FaIcons.FaDatabase />;
      case "Cloud & DevOps": return <FaIcons.FaCloudUploadAlt />;
      case "Tools & Others": return <FaIcons.FaTools />;
      default: return null;
    }
  };

  const skillsByCategory = getSkillsByCategory();

  return (
    <>
      <Container maxW={"3xl"} id="skill">
        <Stack 
          as={Box} 
          textAlign={"center"} 
          spacing={{ base: 6, md: 10 }}
          pb={{ base: 16, md: 24, lg: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Stack/Tools</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Box px={{ base: 2, md: 4 }}>
            <VStack spacing={6}>
              {Object.keys(skillsByCategory).map((category, index) => (
                <OverviewCategoryCard 
                  key={index}
                  title={category}
                  skills={skillsByCategory[category]}
                  icon={getCategoryIcon(category)}
                  color={getSkillColorScheme(category)}
                  cardWidth={cardWidth}
                />
              ))}
            </VStack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
