import { VStack } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import Intro from "./Intro";
import MainNavigation from "./MainNavigation";


// main layout componet, use SASS and Chakrea UI to modifi the main wrapre layout
const Layout = (props) => {
  return (


    <VStack>
      <Container 
<<<<<<< HEAD
        maxW='1200px'
        p="0" 
        bg='blue.600' color='white' 
=======
        maxW='1200px' 
        bg='blue.600' 
>>>>>>> 616547d7e5881fae6ae84718899d0bdeacfefbe7
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
