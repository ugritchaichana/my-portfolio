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
  Wrap,
  WrapItem,
  useBreakpointValue,
  Tabs,
  TabList,
  Tab,
  VStack,
  Heading,
  useColorModeValue,
  Hide,
  Show,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import EducationArray from "./EducationArray";
import TagsArray from "./TagsArray";
import FadeIn from "./FadeIn";
import { BsCalendar4Week } from "react-icons/bs";
import { FaMapMarkerAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";

export default function Education({ color }) {
  const education = EducationArray();
  const options = TagsArray("EducationTags");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "left", md: "left" });
  const dateAlign = useBreakpointValue({ base: "left", md: "right" });
  const badgeSize = useBreakpointValue({ base: "2xs", md: "xs" });
  const cardGap = useBreakpointValue({ base: 4, md: 6 });
  const logoSize = useBreakpointValue({ base: "60px", md: "80px" });
  
  const cardWidth = useBreakpointValue({ base: "xs", md: "2xl" });
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const tabSelectedColor = `${color}.500`;
  const tabHoverColor = `${color}.200`;
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = `${color}.400`;
  
  const isDegreeBadge = (badgeName) => {
    const degreeBadges = ['Bachelor', 'Master', 'Ph.D', 'Certificate', 'Diploma', 'High School'];
    return degreeBadges.includes(badgeName);
  };

  const isLocationBadge = (badgeName) => {
    const locations = ['Bangkok', 'Chanthaburi', 'Rayong'];
    return locations.includes(badgeName);
  };

  useEffect(() => {
    if (options.length > 0) {
      const uniqueTags = [];
      options.forEach(option => {
        if (!uniqueTags.includes(option.value)) {
          uniqueTags.push(option.value);
        }
      });
      setCategories(uniqueTags);
    }
  }, [options]);

  const currentCategoryEducation = categories.length > 0
    ? education.filter(edu => categories[activeCategoryIndex] === "" || edu.tags.includes(categories[activeCategoryIndex]))
    : education;

  const handleCategoryChange = (index) => {
    setActiveCategoryIndex(index);
  };

  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 6, md: 10 }}
          pb={{ base: 16, md: 24, lg: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={headingColor} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          
          {categories.length > 0 && (
            <Tabs 
              variant="enclosed" 
              colorScheme={color} 
              onChange={handleCategoryChange} 
              align="center"
              isFitted
            >
              <TabList 
                mb={6} 
                overflowX="hidden" 
                flexWrap="wrap"
                justifyContent="center"
                display="flex"
                width="100%"
                gap={2}
              >
                {options.map((option, index) => (
                  <Tab 
                    key={index} 
                    _selected={{ 
                      color: "white", 
                      bg: tabSelectedColor,
                      fontWeight: "bold",
                      borderRadius: "md"
                    }}
                    _hover={{ bg: tabHoverColor }}
                    minW={{ base: "auto", md: "auto" }}
                    px={4}
                    py={2}
                    m={1}
                    borderRadius="md"
                  >
                    {option.label}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          )}
          
          <VStack px={{ base: 2, md: 4 }} spacing={cardGap} width="100%">
            {currentCategoryEducation.map((edu, i) => (
              <FadeIn bottom key={`edu-item-${i}-${edu.position}`}>
                <Card 
                  size="md" 
                  boxShadow="lg" 
                  borderRadius="lg"
                  width={cardWidth}
                  h="auto"
                  overflow="hidden"
                  bg={cardBg}
                  borderWidth="1px"
                  borderColor={borderColor}
                  _hover={{ 
                    transform: "translateY(-5px)", 
                    transition: "transform 0.3s ease",
                    boxShadow: "xl"
                  }}
                >
                  <CardHeader pb={3}>
                    <Flex 
                      justifyContent="space-between" 
                      direction={flexDirection}
                      gap={3}
                      align="flex-start"
                    >
                      <HStack spacing={4} align="center">
                        <Box 
                          minW={{ base: "60px", md: "80px" }}
                          h={{ base: "60px", md: "80px" }}
                          borderRadius="md"
                          p={2}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          bg={`${color}.50`}
                          borderWidth="1px"
                          borderColor={`${color}.200`}
                        >
                          <Image 
                            src={edu.image} 
                            maxH="100%" 
                            maxW="100%"
                            objectFit="contain"
                            borderRadius="md"
                            alt={edu.company}
                          />
                        </Box>
                        <Box>
                          <Heading 
                            as="h3" 
                            size={{ base: "sm", md: "md" }} 
                            fontWeight="bold"
                            color={headingColor}
                            textAlign={textAlign}
                          >
                            {edu.position}
                          </Heading>
                          <Text 
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="medium"
                            textAlign={textAlign}
                          >
                            {edu.company}
                          </Text>
                          <HStack mt={1} spacing={3} color="gray.600" fontSize="sm" textAlign={textAlign}>
                            <Flex align="center">
                              <BsCalendar4Week style={{ marginRight: "0.25rem" }} />
                              <Text>{edu.duration.replace(/\*\*/g, '')}</Text>
                            </Flex>
                            
                            {/* Only show location badges with map marker in header */}
                            {edu.badges
                              .filter(badge => isLocationBadge(badge.name))
                              .map((badge, idx) => (
                                <Flex key={idx} align="center">
                                  <FaMapMarkerAlt style={{ marginRight: "0.25rem" }} />
                                  <Text>{badge.name}</Text>
                                </Flex>
                              ))
                            }
                          </HStack>
                        </Box>
                      </HStack>
                      <Flex 
                        align="center" 
                        justify="center"
                        p={2}
                        borderRadius="full"
                        boxSize={{ base: "40px", md: "50px" }}
                        bg={`${color}.50`}
                        color={`${color}.500`}
                        fontSize={{ base: "lg", md: "xl" }}
                        display={{ base: "none", md: "flex" }}
                      >
                        <FaUniversity />
                      </Flex>
                    </Flex>
                  </CardHeader>
                  
                  {edu.listItems.length > 0 && (
                    <CardBody pt={0}>
                      <Box textAlign="left">
                        <VStack spacing={2} align="stretch">
                          {edu.listItems.map((item, idx) => (
                            <Flex key={idx} align="flex-start">
                              <ChevronRightIcon 
                                color={`${color}.500`}
                                boxSize={5}
                                mt="3px"
                                mr={2}
                              />
                              <Text fontSize={{ base: "sm", md: "md" }}>
                                {item}
                              </Text>
                            </Flex>
                          ))}
                        </VStack>
                      </Box>
                    </CardBody>
                  )}
                  
                  <CardFooter pt={0}>
                    <Wrap spacing={2}>
                      {edu.badges.map((badge, idx) => (
                        <WrapItem key={idx}>
                          <Badge 
                            colorScheme={badge.colorScheme} 
                            fontSize={badgeSize}
                            py={0.5}
                            px={1.5}
                            borderRadius="md"
                            display="flex"
                            alignItems="center"
                          >
                            {isDegreeBadge(badge.name) && (
                              <FaGraduationCap style={{ marginRight: "0.25rem" }} />
                            )}
                            {isLocationBadge(badge.name) && (
                              <FaMapMarkerAlt style={{ marginRight: "0.25rem" }} />
                            )}
                            {badge.name}
                          </Badge>
                        </WrapItem>
                      ))}
                      <WrapItem>
                        <Badge 
                          colorScheme={color}
                          fontSize={badgeSize}
                          py={0.5}
                          px={1.5}
                          borderRadius="md"
                          variant="outline"
                        >
                          {edu.tags}
                        </Badge>
                      </WrapItem>
                    </Wrap>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </VStack>
        </Stack>
      </Container>
    </>
  );
}
