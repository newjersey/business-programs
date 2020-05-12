import React, { useState } from "react";
import { Card } from "./helper-components/index";
import styled from "styled-components";
import { Box, Menu } from "grommet";
import Form from "./Form";
import ResultsButton from "./ResultsButton";
import { Button } from "~/components/uswds-components";
import { useFormDictionary, useForm } from "~/contexts/form";
import { useSelectLanguage } from "~/contexts/language";

import Header from "./Header";
import Footer from "./Footer";

const StyledMenu = styled(Menu)`
  text-decoration: underline;
  color: black;
`;

interface FormValues {
  [questionId: string]: string;
}

interface Props {
  ca?: boolean;
}

const FormApp: React.FC<Props> = (props) => {
  const { ca } = props;
  const [back, next] = useFormDictionary("back", "next");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {
    form: { questions },
  } = useForm();
  const [language, setLanguage, languageOpts] = useSelectLanguage();

  let filteredQuestions = questions;
  if (!ca) {
    // This is a temporary fix until we flush out branching better
    filteredQuestions.filter((q) => !q.ca_only);
  }

  const setNextPage = (index: number) => {
    setCurrentIndex(index);
    window.scrollTo(0, 0);
  };

  const onClickNext = () => setNextPage(currentIndex + 1);
  const onClickBack = () => setNextPage(currentIndex - 1);

  return (
    <>
      <Header />
      <Box
        align="start"
        direction="column"
        background="white"
        pad={{ vertical: "30px", horizontal: "100px" }}
      >
        <Box justify="end" direction="row" pad="none" gap="medium">
          {currentIndex > 0 && (
            <Button
              buttonType="unstyled"
              onClick={onClickBack}
              style={{ color: "black" }}
            >
              &#9666; {back}
            </Button>
          )}
          <StyledMenu
            label={languageOpts.find((lang) => lang.value === language)!.title}
            items={languageOpts.map((lang) => ({
              label: lang.title,
              onClick: () => {
                setLanguage(lang.value);
              },
            }))}
          />
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
