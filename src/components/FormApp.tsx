import React, { useState, useContext } from "react";
import { Card, Button } from "./helper-components/index";
import { Box } from "grommet";
import { initializeForm } from "../forms";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Review from "./Review";
import Form from "./Form";
import { LanguageContext } from "../contexts/language";
import { translate, getCopy } from "../forms/index";
import ResultsButton from "./ResultsButton";

import { FormContext, Values, Errors, Value } from "../contexts/form";
import Header from "./Header";
import Footer from "./Footer";

interface FormValues {
  [questionId: string]: string;
}

interface Props {
  ca?: boolean
}

const FormApp: React.FC<Props> = (props) => {

  const { ca } = props
  const { language } = useContext(LanguageContext);
  const form = initializeForm();

  const { pages, seal } = form;

  if (!ca) {
    let rmPage = -1
    pages.forEach((page, index) => {
      if (page.title.en === 'California') {
        rmPage = index
      }
    })
    if (rmPage >= 0) {
      pages.splice(rmPage, 1)
    }
  }

  const pageTitles = pages.map((page) => {
    return translate(page.title, language);
  })

  const pageComponents = [...pages.map((page) => <Form page={page} />)];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [formValues, setFormValues] = useState<Values>({});
  const [formErrors, setFormErrors] = useState<Errors>({});

  const setFormValue = (key: string, value: Value) =>
    setFormValues({ ...formValues, [key]: value });
  const setFormError = (key: string, value: string) =>
    setFormErrors({ ...formErrors, [key]: value });

  const setNextPage = (index: number) => {
    setCurrentIndex(index);
    window.scrollTo(0, 0);
  };

  const onClickNext = () => setNextPage(currentIndex + 1);
  const onClickBack = () => setNextPage(currentIndex - 1);

  return (
    <>
      <Header />
      <Box align="center" pad="medium" direction="column">
        <Box width="100%" height="100%" justify="center" direction="row">
          <Card
            width="50%"
            background="white"
            display="flex"
            justify="between"
            flexDirection="column"
            textAlign="left"
          >
            <FormContext.Provider
              value={{
                setError: setFormError,
                setValue: setFormValue,
                values: formValues,
                errors: formErrors,
              }}
            >
              {pageComponents[currentIndex]}
              <Box justify="between" pad="medium" direction="row">
                {currentIndex > 0 && (
                  <Button
                    border={{ radius: 0 }}
                    color="black !important"
                    onClick={onClickBack}
                    label={translate(getCopy("back"), language)}
                  />
                )}
                {currentIndex + 1 < pageTitles.length ? (
                  <Button
                    color="black !important"
                    onClick={onClickNext}
                    label={translate(getCopy("next"), language)}
                  />
                ) : (
                  <ResultsButton />
                )}
              </Box>
            </FormContext.Provider>
          </Card>
          <Sidebar
            pages={pageTitles}
            currentIndex={currentIndex}
            setCurrentIndex={setNextPage}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default FormApp;
