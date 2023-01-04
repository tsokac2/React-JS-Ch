import { Link } from "@chakra-ui/react";
import { Center, Circle } from "@chakra-ui/react";
import { Box, Flex, Spacer, ButtonGroup } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const MainNavigation = (props) => {
  return (
    
    <Flex minWidth="max-content" alignItems="center">
      <Box p="0" bg="red" w="100%">
        <Center bg="green.500">
          <Link
            className="font"
            href="http://www.tomislavsokac.com/home"
            isExternal
          >
            tomislavsokac.com
          </Link>
        </Center>
      </Box>

      <Spacer />

      <ButtonGroup gap="2" bg="pink" px="2">
        <Circle w="1.5rem" h="1.5rem" color="white">
          <Link href="https://github.com/tsokac2/React-JS-Ch" isExternal>
            <FaGithub />
          </Link>
        </Circle>

        <Circle w="1.5rem" h="1.5rem" color="white">
          <Link href="https://www.linkedin.com/in/tomislav-sokac2/" isExternal>
            <SiLinkedin />
          </Link>
        </Circle>
      </ButtonGroup>
    </Flex>
  );
};

export default MainNavigation;
