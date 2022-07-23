import { Box } from '@chakra-ui/react';

import MainNavigation from "./MainNavigation";


// main layout componet, use SASS and Chakrea UI to modifi the main wrapre layout
const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
