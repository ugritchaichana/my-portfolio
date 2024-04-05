import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  Flex,
  Badge,
  Image,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import EducationArray from "./EducationArray";
import TagsArray from "./TagsArray";
import KMUTNB_LOGO from "../logo_kmutnb.png";
import TNC_LOGO from "../logo_technic.png";

export default function Education({ color }) {
  const education = EducationArray();
  const options = TagsArray("EducationTags");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {education
              .filter((exp) => exp.tags.includes(selected))
              .map((exp, i) => (
                <Fade bottom key={exp.company}>
                  <>
                    <Card size="sm">
                      <CardHeader>
                        <Flex justifyContent="space-between">
                          <HStack>
                            <Image src={KMUTNB_LOGO} h={59} />
                            <Box px={2} align="left">
                              <Text fontWeight={600}>
                                King Monkut's Unversity of Technology
                              </Text>
                              <Text fontWeight={600}>North Bangkok</Text>
                              <Text>Electronics Computer Technology</Text>
                              <Badge variant="solid" colorScheme="green">
                                Bachelor
                              </Badge>
                            </Box>
                          </HStack>
                          <Text px={2} fontWeight={300}>
                            2022 - Present
                          </Text>
                        </Flex>
                      </CardHeader>
                    </Card>
                    <br />
                    <Card size="sm">
                      <CardHeader>
                        <Flex justifyContent="space-between">
                          <HStack>
                            <Image src={TNC_LOGO} h={59} />
                            <Box px={2} align="left">
                              <Text fontWeight={600}>
                                {"Chanthaburi Technical College"}
                              </Text>
                              <Text>{"Technology Computer"}</Text>
                              <Badge variant="solid" colorScheme="green">
                                Voc. Cert.
                              </Badge>
                              &nbsp;
                              <Badge variant="solid" colorScheme="green">
                                High Voc. Cert.
                              </Badge>
                              &nbsp;
                            </Box>
                          </HStack>
                          <Text px={2} fontWeight={300}>
                            {"2017 - 2022"}
                          </Text>
                        </Flex>
                      </CardHeader>
                    </Card>
                  </>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
