import React from "react";
import {
  Box,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Container,
} from "@chakra-ui/react";

export default function QuestionBox() {
  return (
    <Flex direction="column" justify="center" align="center" mt="10">
      <Box>
        <FormControl>
          <FormLabel> Question</FormLabel>
          <Input placeholder="type your question" />
          <Button
            type="submit"
            variant="solid"
            colorScheme="green"
            mt="5"
            float="right"
          >
            {" "}
            Ask
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
}
