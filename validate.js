// validate questions file
// flags issues with uniqueness, types, etc.

const { questions, language_defaults } = require("./docs/questions");



let qCodes = Object.keys(questions),
    languages = Object.keys(language_defaults),
    uniqueNames = [],
    currentClasses = [];

languages.forEach((lang) => {
  ["yes_text","no_text","skip","not_sure","examples","enter"].forEach((label) => {
    if (!language_defaults[lang][label]) {
      console.error("Defaults for language " + lang + " missing translation for: " + label);
    }
  });
});

qCodes.forEach((code) => {
  if (!isNaN(code * 1)) {
    console.error("Question code " + code + " is an integer value; must be a string");
  }

  let question = questions[code];

  if (question.header) {
    // header
    languages.filter(lang => lang !== "en").forEach((lang) => {
      if (!question[lang]) {
        console.error("Heading " + code + " has no translation in: " + lang);
      }
    });
    if (question.header !== true) {
      console.error("Strange value for header attribute: " + code);
    }

  } else if (question.html) {
    // question
    if (question.classes) {
      currentClasses = currentClasses.concat(question.classes.split(" "));
    }
    if (question.yes_hides) {
      currentClasses.forEach((cl) => {
        if (question.yes_hides.includes(cl)) {
          console.error("Question " + code + " tries to hide a previous question with class: " + cl);
        }
      });
    }
    if (question.no_hides) {
      currentClasses.forEach((cl) => {
        if (question.no_hides.includes(cl)) {
          console.error("Question " + code + " tries to hide a previous question with class: " + cl);
        }
      });
    }

    if (question.input) {
      if (!question.input.name) {
        console.error("Question " + code + " has an input with no name attribute");
      }
    }

    if (question.skippable === false) {
      console.error("Question " + code + " has skippable set to false; this has no meaning");
    }

    languages.filter(lang => lang !== "en").forEach((lang) => {
      if (!question[lang]) {
        console.error("Question " + code + " has no translation fields for: " + lang);
        return;
      } else if (!question[lang].html) {
        console.error("Question " + code + " has no translation HTML for: " + lang);
      }

      if (question.input) {
        if (question.input.label && !question[lang].input.label) {
          console.error("Question " + code + " input has no translated label for: " + lang);
        }
        if (question.input.examples && !question[lang].input.examples) {
          console.error("Question " + code + " input has no translated examples for: " + lang);
        }
      }
      if (question.yes_text && !question[lang].yes_text) {
        console.error("Question " + code + "  has no translated yes_text for: " + lang);
      }
      if (question.no_text && !question[lang].no_text) {
        console.error("Question " + code + "  has no translated yes_text for: " + lang);
      }
      if (typeof question.skippable === "string" && !question[lang].skippable) {
        console.error("Question " + code + "  has no translated skippable for: " + lang);
      }
    });

  } else {
    // missing
    console.error("Section " + code + " needs header:true or html content");
  }
});
