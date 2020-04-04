# small-business-programs

Survey to recommend programs for small businesses

# Documentation

## Questions

We list all questions in order in ```docs/questions.js```

Sample question:

```javascript
{
  "q110": {
    html: "<p> \
      Is your organization for-profit or not-for-profit? \
    </p>",
    yes_text: "For-profit",
    no_text: "Not-for-profit",
    yes_hides: ["non-profit"]
  }
}
```

Attributes:
- yes_text, no_text: replaces default "Yes" and "No" on buttons
- classes: HTML classes (for example: "non-profit local") which can be used to show/hide questions
- yes_hides, no_hides: array of classes, selects questions to hide and show
- hard_pass: true: ends survey if you answer "Yes" (e.g. is this an illegal business?)
- hard_pass: false: ends survey if you answer "No" (e.g. do you have a business license in our state?)
- input: for numeric inputs: { name: "", label: "", examples: "" }
- skippable: true: add "Not Sure"/"Skip" button
- skippable: "Pass": add "Not Sure"/"Skip" button and replace default text

## Headers

```javascript
{
  "Basic Information": { header: true }
  ...
}
```

## Programs

In ```docs/formflow.js```, set which question codes should be answered YES
or NO. More complex questions, such as numeric values, are answered with
functions.  If the user clicks "Skip", "Not Sure", or otherwise avoids a 
question, it will not count against them (i.e. "required_no" behaves more like
"dont_answer_yes")

```javascript
{
  loan_program_A: {
    required_yes: ["q1", "q2", "q12"],
    required_no: ["q3", "q14"],
    eval: {
      "q8": function (fte) {
        fte = parseNumber(fte);
        return fte >= 1 && fte <= 10;
      }
    }
  }
}
```

## Translations

Update UI options:

```javascript
var language_defaults = {
  en: {
    yes_text: "Yes",
    no_text: "No",
    ...
  }
};
```

Add to questions and headers:

```javascript
{
  "Section Title": {
    header: true,
    es: "Spanish Section Title"
  },
  test: {
    html: "English text",
    yes_text: "English: yes button",
    es: {
      html: "Spanish text",
      yes_text: "Spanish: yes button"
    }
  },
}
```


# Running locally
Currently a static site. If you are a Node dev:

```bash
npm install http-server -g
cd docs
http-server
```

We included Bootstrap, jQuery, and Popper as local files to avoid
third-party CDNs and dependencies.

# Contributing
We welcome contributions to open source code and documentation

See [CONTRIBUTING.md](CONTRIBUTING.md) for additional information.

# License

Creative Commons Zero license
