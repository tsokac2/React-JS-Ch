import { SimpleGrid } from "@chakra-ui/react";

const CardWrap = (props) => {
  return (
    <SimpleGrid columns={[1, , 2, 3]} spacingY={6} spacingX={2} bg="gray">
      {props.children}
    </SimpleGrid>
  );
};

export default CardWrap;
