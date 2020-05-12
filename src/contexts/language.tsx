import React, { createContext, useEffect, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Copy, Translated } from "~forms/types";

const initialState = { language: "en", setLanguage: (language: string) => {} };
export const LanguageContext = createContext(initialState);

const languageOpts = [
  { title: "English", value: "en" },
  { title: "中文", value: "zh" },
  { title: "Español", value: "es" },
];

export const LanguageProvider: React.FC = (props) => {
  const [language, setLanguage] = useLocalStorage<string | undefined>(
    "papua-selected-language",
    undefined
  );

  // Check the user's browser's language and automatically match that.
  useEffect(() => {
    const codeMap: Record<string, string> = {
      en: "en",
      "en-US": "en",
      "en-GB": "en",
      es: "es",
      zh: "zh",
    };
    const detectedLanguageCode = codeMap[navigator.language];

    if (detectedLanguageCode && !language) {
      setLanguage(detectedLanguageCode);
    }
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider
      value={{ language: language || initialState.language, setLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

function useLanguage() {
  const languageCtx = useContext(LanguageContext);
  if (languageCtx === undefined) {
    throw Error("No surrounding LanguageProvider found");
  }
  return languageCtx;
}

export function useSelectLanguage(): [
  string,
  (language: string) => void,
  { title: string; value: string }[]
] {
  const { language, setLanguage } = useLanguage();

  return [language, setLanguage, languageOpts];
}

export function useTranslation<T extends object>(copy: T): Translated<T> {
  const { language } = useLanguage();

  // traverses the passed in object, replacing all copy objects with the value in the current language
  return translate(copy, language);
}

function isCopy(obj: Copy | object): obj is Copy {
  return (obj as Copy).en !== undefined;
}

function translate(obj: Copy, language: string): string;
function translate<T extends object>(
  obj: T[],
  language: string
): Translated<T>[];
function translate<T extends object>(obj: T, language: string): Translated<T>;
function translate(obj: any, language: string): any {
  if (Array.isArray(obj)) {
    return obj.map((obj) => translate(obj, language));
  }
  // We're dealing with an object
  if (isCopy(obj)) {
    // using the presence of 'en' key to determine if it's a obj object or not
    return (obj[language] || obj.en) as string;
  }
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key: string) => {
    const cast = obj as { [key: string]: any };
    if (typeof cast[key] === "object") {
      acc[key] = translate(cast[key], language);
    } else {
      acc[key] = cast[key];
    }
    return acc;
  }, {});
}
