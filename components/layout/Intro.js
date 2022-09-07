import { Link } from "@chakra-ui/react";
import { VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from "@chakra-ui/react";
import { Box, Flex, Spacer, ButtonGroup } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';

const Intro = (props) => {

    return (

        <VStack align='stretch' className="font">
            <Box pt="3" bg="red">
                <Heading fontSize={{ base: '2rem', sm: "2.2rem", md: '3rem' }} >React.js cheatsheet</Heading>
            </Box>

            <Box pt="1">

                <Text fontSize='1xl'> <Link href="https://reactjs.org/" color="black" isExternal>React</Link>  is a JavaScript library for building user interfaces.</Text>
            </Box>

        </VStack>
    );
};

export default Intro;