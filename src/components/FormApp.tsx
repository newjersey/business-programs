import React, { useState } from "react";
import { Box, Text } from "grommet";
import Form from "./Form";
import ResultsButton from "./ResultsButton";
import { Button } from "~/components/uswds-components";
import { useFormDictionary, useForm } from "~/contexts/form";

import Header from "./Header";
import Footer from "./Footer";

interface FormValues {
  [questionId: string]: string;
}

interface Props {
  ca?: boolean;
  pitt?:boolean;
}

const FormApp: React.FC<Props> = (props) => {
  const { ca, pitt } = props;
  const [back, next, complete] = useFormDictionary("back", "next", "complete");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {
    form: { questions },
  } = useForm();

  let filteredQuestions = questions;
  if (!ca && !pitt) {
    // This is a temporary fix until we flush out branching better
    filteredQuestions = filteredQuestions.filter((q) => !q.ca_only && !q.pitt_only);
  }
  if (ca) {
        // This is a temporary fix until we flush out branching better
        filteredQuestions = filteredQuestions.filter((q) => !q.pitt_only);
  }
  if (pitt) {
        // This is a temporary fix until we flush out branching better
        filteredQuestions = filteredQuestions.filter((q) => !q.ca_only);
  }

  const percent = Math.floor((currentIndex / filteredQuestions.length) * 100);
  const setNextPage = (index: number) => {
    setCurrentIndex(index);
    window.scrollTo(0, 0);
  };

  const onClickNext = () => setNextPage(currentIndex + 1);
  const onClickBack = () => setNextPage(currentIndex - 1);

  return (
    <>
      <Header showLanguageSelect />
      <Box
        align="start"
        direction="column"
        background="white"
        pad={{ vertical: "medium", horizontal: "xlarge" }}
      >
        {currentIndex > 0 && (
          <Button
            buttonType="unstyled"
            onClick={onClickBack}
            style={{ color: "black" }}
          >
            &#9666; {back}
          </Button>
        )}

        <Box margin={{ top: "medium" }} width="100%">
          <Box
            margin={{ top: "xsmall" }}
            style={{
              width: "100%",
              height: "8px",
              borderRadius: "12px",
              background: "#E4E7EB",
            }}
          >
            <Box
              style={{
                width: `${percent}%`,
                height: "100%",
                borderRadius: "12px",
                background: "#008060",
              }}
            />
          </Box>
          <Box>
            <Text color="black" weight={300} size="xsmall">
              {percent}% {complete}
            </Text>
          </Box>
        </Box>
        <Form question={filteredQuestions[currentIndex]} />

        {currentIndex + 1 < filteredQuestions.length ? (
          <Button onClick={onClickNext} size="large">
            {next}
          </Button>
        ) : (
          <ResultsButton />
        )}
      </Box>
      <Footer />
    </>
  );
};

export default FormApp;
