import { VStack } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import Intro from "./Intro";
import MainNavigation from "./MainNavigation";


// main layout componet, use SASS and Chakrea UI to modifi the main wrapre layout
const Layout = (props) => {
  return (


    <VStack>
      <Container 
        maxW='1200px'
        p="0" 
        bg='blue.600' color='white' 
        w={["100vw", "100vw", "100vw", "90vw"]}
        direction={["column", "column", "row", "row"]}
        p="0"
        >

        <MainNavigation />
        <Intro />
        
      </Container>

    </VStack>


  );
};

export default Layout;
