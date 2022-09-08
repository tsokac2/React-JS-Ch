import { VStack } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import Card from "../CheatContent/Card";
import Intro from "../CheatContent/Intro";
import MainNavigation from "../UI/MainNavigation";
import CardWrap from "./CardWrap";


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
        >

        <MainNavigation />
        <Intro />
        
        <Card />

        
      </Container>

    </VStack>


  );
};

export default Layout;
