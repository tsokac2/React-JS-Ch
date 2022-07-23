import { Link } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

const MainNavigation = (props) => {
  return (
    <nav>
      <HStack>
        <Link href="http://www.tomislavsokac.com/home" isExternal>
          tomislavsokac.com
        </Link>

        <Circle  w="40px" h="40px" bg="tomato" color="white">
          <Link href="https://github.com/tsokac2/React-JS-Ch" isExternal>
            G
          </Link>
        </Circle>

        <Circle  w="40px" h="40px" bg="tomato" color="white">
          <Link href="https://github.com/tsokac2/React-JS-Ch" isExternal>
            G
          </Link>
        </Circle >
      </HStack>
    </nav>
  );
};

export default MainNavigation;
