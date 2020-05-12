import Joi from "@hapi/joi";

// NOTE: make sure to keep this Joi schema aligned
// with any changes to the TS Form type below.
const CopySchema = Joi.object({
  en: Joi.string(),
  es: Joi.string().optional(),
  zh: Joi.string().optional(),
});
let QuestionSchema = Joi.object();
QuestionSchema = Joi.object({
  name: CopySchema,
  instructions: CopySchema.optional(),
  required: Joi.boolean().optional(),
  type: Joi.string(),
  // TODO: fix validation, it's not currently
  // used in the UI.
  validate: Joi.any().optional(),
  id: Joi.string(),
  options: Joi.array()
    .items(
      Joi.object({
        name: CopySchema,
        id: Joi.string(),
        value: Joi.string().optional(),
      })
    )
    .optional(),
  switch: Joi.object()
    .pattern(Joi.string(), [null, Joi.array().items(QuestionSchema)])
    .optional(),
  ca_only: Joi.boolean().optional()
});
export const FormSchema = Joi.object({
  variables: Joi.object().pattern(Joi.string(), Joi.string()),
  instructions: Joi.object().pattern(Joi.string(), CopySchema),
  questions: Joi.array().items(QuestionSchema),
  seal: Joi.string(),
});

export interface RawForm {
  variables: Record<string, string>;
  instructions: Record<string, Copy>;
  questions: Question[];
  seal: string;
}

export type Form = Translated<RawForm>

export interface Page {
  title: Copy;
  heading: Copy;
  // TODO: we don't render this currently
  instructions?: Copy;
  questions: Question[];
}

interface Question {
  name: Copy;
  instructions?: Copy;
  required?: boolean;
  type: QuestionType;
  validate?: QuestionValidation;
  id: string;
  options?: Option[];
  switch?: Switch;
  ca_only?: Boolean;
}
type TranslatedQuestion = Translated<Question>;
export type { TranslatedQuestion as Question }

interface Option {
  name: Copy;
  id: string;
  value?: string;
}
type TranslatedOption = Translated<Option>;
export type { TranslatedOption as Option}

interface Foo {
  name: Copy | undefined
}
 
type Test = Translated<Foo>;


interface Switch {
  [option: string]: Question[] | null | undefined;
}

export interface Copy {
  [languageCode: string]: string;
}

export type Translated<T> = {
  [P in keyof T]: T[P] extends Copy ? string : Translated<T[P]>// (T[P] extends object ? Translated<T[P]> : T[P]);
};

export type QuestionType =
  | "shorttext"
  | "datepicker"
  | "dropdown"
  | "singleselect"
  | "address_picker"
  | "boolean"
  | "phone"
  | "ssn"
  | "address"
  | "integer"
  | "dollar-amount"
  | "longtext"
  | "multiselect"
  | "email"
  | string;

type QuestionValidation = boolean | "re-enter";
