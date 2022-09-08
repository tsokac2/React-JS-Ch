import { Box, VStack, Heading, Flex, Center, Text } from "@chakra-ui/react";
import CardWrap from "../Layout/CardWrap";

const Card = (props) => {
  return (
    <CardWrap>

      {/* Main grid item wraper */}

      <Box w="100%" py="2" bg="black">


        <VStack
          spacing={4}
          align='stretch'
        >
          <Box h='100%' py={3} bg='red.400'>
            <Flex minWidth='max-content' alignItems='center' bg="#fff">

              <Center h={["2rem", "6rem"]} px={2} py={2} bg="gray.300" >
                <Heading as='h3' size='1xl' >Componets</Heading>

              </Center>

              <Center h={["2rem", "6rem"]} w='100%'  px={2} py={2} bg='green.500'   >
                <Box h="1px" w='100%' mt="2px" bg='red.400'></Box>
              </Center>

            </Flex>


          </Box>



        </VStack>

      </Box>



      <Box w="100%" h="10" bg="black"></Box>
      <Box w="100%" h="10" bg="black"></Box>
      <Box w="100%" h="10" bg="black"></Box>
    </CardWrap>
  );
};

export default Card;
