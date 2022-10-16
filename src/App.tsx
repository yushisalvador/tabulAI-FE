import * as React from "react";
import { ChakraProvider, Box, Text, Link, theme } from "@chakra-ui/react";
import QuestionBox from "./components/QuestionBox";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <QuestionBox />
    </Box>
  </ChakraProvider>
);
