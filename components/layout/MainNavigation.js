import { Link } from "@chakra-ui/react";
import { Center, Circle } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box, Flex, Spacer, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const MainNavigation = (props) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={1} fontSize="1rem">
      <GridItem colSpan={3} w="100%" bg="tomato">
        <Center bg="#CBD5E0" color="white">
          <Link href="http://www.tomislavsokac.com/home" isExternal>
            tomislavsokac.com
          </Link>
        </Center>
      </GridItem>

      <GridItem colSpan={1} w="100%" mt={1}>
        <Center bg="#777" color="white">
          <ButtonGroup gap="4">
            <Center color="#000">
              <Link href="https://github.com/tsokac2/React-JS-Ch" isExternal>
                <SiGithub color="blue" />
              </Link>
            </Center>

            <Link
              href="https://www.linkedin.com/in/tomislav-sokac2/"
              isExternal
            >
              <SiLinkedin color="black"  />
            </Link>
          </ButtonGroup>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default MainNavigation;
