import React, { useState, useContext } from "react"
import { LanguageContext } from "../contexts/language"
import { Card, Button } from "./helper-components/index"
import { translate, getCopy } from "../forms/index"
import { FormContext } from '../contexts/form'
import rules from '../rules.json'
import assert from 'assert'

interface Rule {
    op: string,
    qid: string,
    value: string
}

interface ProgramDef {
    program: string,
    rules: Rule[]
}

function evalRuleSet(values : Record<string, any>, ruleSet : Rule[]) {
    return ruleSet.every(rule => {
        const {op, qid, value} = rule
        const inputValue = values[qid]
        if (inputValue === undefined) {
            // answer not filled out yet
            return false
        }

        let inputValueAsString;
        if (inputValue instanceof Date) {
            inputValueAsString = inputValue.toISOString().slice(0, 10) // Just date, not time
        } else {
            inputValueAsString = inputValue.toString()
        }
        if (op === 'eq') {
            return inputValueAsString === value
        } else if (op === 'lt') {
            return inputValueAsString < value
        } else {
            assert(false, `unknown op ${op}`)
        }
    })
}

const ResultsButton: React.FC<{}> = (props) => {

    const { language } = useContext(LanguageContext)

    const { values } = useContext(FormContext)

    // TODO: this should use the validation logic that the questions does
    const typedRules = rules as ProgramDef[]

    const programSuccess = []
    for (const progDef of typedRules) {
        if (evalRuleSet(values, progDef.rules)) {
            programSuccess.push(progDef.program)
        }
    }

    const href = "/results.html?" + programSuccess.map(pid => "eligable=" + pid).join("&")

    return (<Button
        color="black !important"
        href={href}
        label={translate(getCopy("results"), language)}
    />)
}

export default ResultsButton
