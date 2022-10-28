import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function Results({ result }: any) {
  return (
    <Box>
      <Text align="center">{result.question}</Text>
      <Text align="center"> {result.output}</Text>
    </Box>
  );
}
