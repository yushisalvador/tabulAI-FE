import React, { useEffect, useState } from "react";
import axios from "axios";
import { sanitize } from "dompurify";

import {
  Box,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
// import Answers from "./Answers";

export default function QuestionBox() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<Answers[]>([]);

  interface Answers {
    code: string;
    output: string;
    question: string;
    table_html: any;
  }
  const askQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.get(
      `https://pandai-2.cathalweakliam.repl.co/ask?question=${question}`
    );
    const answerobj = {
      output: res.data.output,
      code: res.data.code,
      question: res.data.question,
      table_html: res.data.table_html,
    };
    setAnswers([...answers, answerobj]);
    console.log("answers", answers);
  };

  return (
    <>
      <Center>
        <Box>
          {answers.map((a, index) =>
            a.table_html ? (
              <Box key={index}>
                <Text align="center">{a.question}</Text>
                <div
                  dangerouslySetInnerHTML={{ __html: sanitize(a.table_html) }}
                />
              </Box>
            ) : (
              <Box>
                <Text align="center">{a.question}</Text>
                <Text align="center"> {a.output}</Text>
              </Box>
            )
          )}
        </Box>
      </Center>

      <Flex direction="column" justify="center" align="center" mt="10">
        <Box>
          <form onSubmit={(e) => askQuestion(e)}>
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
      </Flex>
    </>
  );
}
