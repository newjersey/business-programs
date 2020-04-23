import React from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import FormApp from "./components/FormApp";
import { LanguageProvider } from "./contexts/language";
import Landing from "./components/Landing";
import OldQuestionnaire from "./components/OldQuestionnaire";
import PPPLoanInfo from "./components/PPPLoanInfo";

const theme = {
  global: {
    text: {
      align: "left",
    },
    font: {
      size: "14px",
    },
    selected: {
      background: "#008060",
    },
    focus: {
      border: {
        color: "none",
      },
    },
    control: {
      border: {
        color: "black",
      },
    },
  },
  select: {
    icons: {
      color: "#000000",
    },
  },
};

function App() {
  // `theme as any` because grommet has incomplete TS definitions
  return (
    <Grommet className="App" theme={theme as any}>
      <LanguageProvider>
        <Router>
          <Switch>
            <Route exact path="/questions">
              <FormApp />
            </Route>
            <Route exact path="/questionnaire">
              <OldQuestionnaire />
            </Route>
            <Route exact path="/ppp-loans">
              <PPPLoanInfo />
            </Route>
            <Route exact path="/">
              <Landing></Landing>
            </Route>
          </Switch>
        </Router>
      </LanguageProvider>
    </Grommet>
  );
}

export default App;
