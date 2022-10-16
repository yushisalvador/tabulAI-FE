import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

export default function QuestionBox() {
  const [question, setQuestion] = useState("");
  const getReq = async () => {
    const req = await axios.get("https://pandai-2.cathalweakliam.repl.co");
    console.log(req);
  };

  useEffect(() => {
    getReq();
  }, []);

  return (
    <Flex direction="column" justify="center" align="center" mt="10">
      <Box>
        <FormControl>
          <FormLabel> Question</FormLabel>
          <Input
            placeholder="type your question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
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
