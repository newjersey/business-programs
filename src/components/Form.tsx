import React from "react";
import { Question as QuestionType } from "~forms/types";
import Question from "./Question";

interface Props {
  question: QuestionType;
}

const Form: React.FC<Props> = ({ question }) => {
  return <Question question={question} key={question.name} />;
};

export default Form;
