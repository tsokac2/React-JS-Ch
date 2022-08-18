import "../styles/index.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

function CheatApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default CheatApp;
