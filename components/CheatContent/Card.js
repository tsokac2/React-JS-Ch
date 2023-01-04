import {
  Box,
  VStack,
 Button,
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

      <Box w="100%" pt={3} bg="black">
        <VStack spacing={4} align="stretch">
          <Box h="100%" py={0} bg="red.400">

         
              <Box px={2} py={0} w="100%" bg="red.200">
                <h1 className="card-heading" as="h3" size="1xl">Componets Componets Componetss</h1>
              </Box>
          


            <Box h="4rem" py={2} w="100%" bg="lightblue" color={"#000"}>
              {/* code block */}
              <Code>
                const myApp = (props) => <br />
                <code>background: red;</code>
                <code>background: red;</code>
              </Code>
            </Box>

            <Box w="100%" py={1}  borderTop="1px" borderColor="blue.400">
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








    </CardWrap>
  );
};

export default Card;
