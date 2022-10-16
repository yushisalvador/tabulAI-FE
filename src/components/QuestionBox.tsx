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
  const [code, setCode] = useState(null);
  const [answer, setAnswer] = useState(null);

  const askQuestion = async (e: any) => {
    e.preventDefault();
    console.log("question", question);
    const res = await axios.get(
      `https://pandai-2.cathalweakliam.repl.co/ask?question=${question}`
    );
    setCode(res.data?.code);
    setAnswer(res.data?.output);
  };

  return (
    <Flex direction="column" justify="center" align="center" mt="10">
      <Box>
        <form onSubmit={askQuestion}>
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
        </form>
      </Box>

      <br />
      <Box whiteSpace="pre" textAlign="left">
        {code}
      </Box>
      <br />
      <Box whiteSpace="pre" textAlign="left">
        {answer}
      </Box>
    </Flex>
  );
}
