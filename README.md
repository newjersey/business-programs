# small-business-programs

Survey to recommend programs for small businesses

# Docs v2

This describes the new React-based form interface.

## Build

To test a "production" build:

 $ yarn build
 $ cp -r build docs/questions
 $ cd docs && python -m SimpleHTTPServer

## Development

On the first run:

  $ yarn install

And then to test the form interface:

  $ yarn start

This will open a browser window with just the form.

The contents of the form itself are defined in src/form.json

# Documentation

## Questions

We list all questions in order in ```docs/questions.js```

Sample question:

```javascript
{
  "q110_is_non_profit": {
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
    required_yes: ["q1_is_non_profit_reg_in_nj", "q2_physical_location_in_nj", "q12_is_specific_industry"],
    required_no: ["q3_is_home_based", "q14_is_prohibited_type"],
    eval: {
      "q8_number_of_fte": function (fte) {
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
