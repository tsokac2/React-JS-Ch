import { Box, VStack, Heading, Flex, Center, Divider  } from "@chakra-ui/react";
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
            <Flex minWidth='max-content' alignItems='center' bg="#fff" py={3}>

              <Heading as='h3' size='1xl' bg="gray.300" px={2}>Componets</Heading>

              <Center bg='green.500' w='100%'>
              <Divider />
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
