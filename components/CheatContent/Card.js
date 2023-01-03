import {
  Box,
  VStack,
  HStack,
  Heading,
  Flex,
  Center,
  Text,
  Code,
  Link,
  Badge,
} from "@chakra-ui/react";
import CardWrap from "../Layout/CardWrap";

const Card = (props) => {
  return (
    <CardWrap>
      {/* Main grid item wraper */}

      {/* box 1 - will be render from the server */}

      <Box w="100%" py="2" bg="black">
        <VStack spacing={4} align="stretch">
          <Box h="100%" py={0} bg="red.400">

         
              <Box h={["2rem", "2rem"]} px={2} py={2} w="100%">
                <h1 className="mline">Componets Componets Componets</h1>
              </Box>
            


           


            <Box h="4rem" w="100%" mt=".5rem" bg="lightblue" color={"#000"}>
              {/* code block */}
              <Code>
                const myApp = (props) => <br />
                <code>background: red;</code>
                <code>background: red;</code>
              </Code>
            </Box>

            <Box w="100%" borderTop="1px" borderColor="gray.200">
              Run on{" "}
              <Link
                className="font"
                href="https://jsbin.com/?html,output"
                isExternal
              >
                
                <Badge colorScheme='purple'>jsBin.com</Badge>
              </Link>

              <Text>
                <Link
                className="font"
                href="https://jsbin.com/?html,output"
                isExternal
              >
                
                # Docs
              </Link>
              </Text>
            </Box>
          </Box>
        </VStack>
      </Box>






      {/* box 2  - will be render from the server */}
      <Box w="100%" py="2" bg="black">
        <VStack spacing={4} align="stretch">
          <Box h="100%" py={0} bg="red.400">
            <Flex minWidth="max-content" alignItems="center" bg="#fff">
              <Center h={["2rem", "2rem"]} px={2} py={2} bg="gray.300">
                <Heading as="h3" size="1xl">
                  Componets
                </Heading>
              </Center>

              <Center
                h={["2rem", "2rem"]}
                w="100%"
                px={2}
                py={2}
                bg="green.500"
              >
                <Box h="1px" w="100%" mt="2px" bg="red.400"></Box>
              </Center>
            </Flex>

            <Box h="4rem" w="100%" mt=".5rem" bg="#FFF">
              <p className="content-text">main componet content</p>
            </Box>
          </Box>
        </VStack>
      </Box>

      {/* box 3 - will be render from the server */}

      <Box w="100%" py="2" bg="black">
        <VStack spacing={4} align="stretch">
          <Box h="100%" py={0} bg="red.400">
            <Flex minWidth="max-content" alignItems="center" bg="#fff">
              <Center h={["2rem", "2rem"]} px={2} py={2} bg="gray.300">
                <Heading as="h3" size="1xl">
                  Componets
                </Heading>
              </Center>
              <Center
                h={["2rem", "2rem"]}
                w="100%"
                px={2}
                py={2}
                bg="green.500"
              >
                <Box h="1px" w="100%" mt="2px" bg="red.400"></Box>
              </Center>
            </Flex>
            <Box h="4rem" w="100%" mt=".5rem" bg="#FFF">
              <p className="content-text">main componet content</p>
            </Box>
          </Box>
        </VStack>
      </Box>
    </CardWrap>
  );
};

export default Card;
