import { Link } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Box, Flex, Spacer, ButtonGroup } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const MainNavigation = (props) => {
  return (


    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Link href="http://www.tomislavsokac.com/home" isExternal>
          tomislavsokac.com
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Circle w="1.5rem" h="1.5rem" bg="tomato" color="white">
          <Link href="https://github.com/tsokac2/React-JS-Ch" isExternal>
            <FaGithub />
          </Link>
        </Circle>
        <Circle w="1.5rem" h="1.5rem" bg="tomato" color="white">
          <Link href="https://github.com/tsokac2/React-JS-Ch" isExternal>
            <FaGithub />
          </Link>
        </Circle>
      </ButtonGroup>
    </Flex>



  );
};

export default MainNavigation;
