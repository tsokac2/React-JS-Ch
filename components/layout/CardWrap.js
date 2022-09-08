import { SimpleGrid } from '@chakra-ui/react';


const CardWrap = (props) => {

    return (
        <SimpleGrid columns={[1, 2, 3]} spacing={2}>
            {props.children}
        </SimpleGrid >
    );
};

export default CardWrap;