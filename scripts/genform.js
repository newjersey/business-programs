/*
Generate skeleton of from.json from the spreadsheet definition
*/
const fs = require('fs')
const assert = require('assert')
const csv = require('csv')

const ID_COL = 0
const TITLE_COL = 1
const TEXT_COL = 3
const INPUT_TYPE_COL = 4
const START_PROGRAMS_COL = 5

function genQuestion(row) {
    const qinput = function() {
        switch (row[INPUT_TYPE_COL].trim()) {
            case "Y/N":
            case "Y/N; if No to previous":
                return {type: "boolean", required: true}
            case "Number":
                return {type: "dollar-amount", required: true}
            case "Select":
                return {type: "dropdown", required: true, options: "TODO"}
            case "Y/N/Not sure":
                const ynns = [
                    {id: "yes", name: "Yes"},
                    {id: "no", name: "No"},
                    {id: "not-sure", name: "Not Sure"}
                ]
                return {type: "singleselect", ynns}
            case "datepicker":
                return {type: "datepicker", required: true}
            default:
                assert(false, row[INPUT_TYPE_COL])
        }
    }()

    return {
        id: row[ID_COL],
        name: {
            en: row[TEXT_COL]
        },
        ...qinput,
    }
}

function groupBy(arr, getter) {
    if (arr.length === 0) {
        return []
    }

    const ret = []
    let current = [arr[0]]
    let lastKey = getter(arr[0])
    for (let i = 1; i < arr.length; ++i) {
        let curKey = getter(arr[i])
        if (curKey !== lastKey) {
            ret.push(current)
            current = []
            lastKey = curKey
        }
        current.push(arr[i])
    }
    ret.push(current)

    return ret
}


function makePage(qs) {
    return {
        title: {
            en: qs[0][TITLE_COL]
        },
        heading: {
            en: qs[0][TITLE_COL]
        },
        questions: qs.map(genQuestion)
    }
}

function main() {

    const input = fs.readFileSync(process.argv[2]);

    csv.parse(input, {
        comment: '#'
    }, function(err, rows) {

        const byPage = groupBy(rows.slice(2), row => row[TITLE_COL])

        const root = {
            seal: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Seal_of_California.svg",
            variables: {},
            instructions: {
                "get-started": {
                        "en": "Get Started"
                    },
                    "next": {
                        "en": "Next"
                    },
                    "yes": {
                        "en": "Yes"
                    },
                    "no": {
                        "en": "No"
                    },
                    "introduction": {
                        "en": "Introduction"
                    },
                    "submit": {
                        "en": "Review & Submit"
                    },
                    "back": {
                        "en": "Go Back"
                    },
                    "language": {
                        "en": "Language"
                    },
                    "progress": {
                        "en": "Progress"
                    },
                    "complete": {
                        "en": "Complete"
                    },
                    "results": {
                        "en": "Results"
                    }
                }
            },
            pages: byPage.map(makePage)
        }

        fs.writeFileSync('form.json', JSON.stringify(root))

        const header = rows[0]
        const rules = {}
        for (let i = START_PROGRAMS_COL; i < header.length; ++i) {
            rules[header[i]] = []
        }
        for (const row of rows.slice(1)) {
            const qid = row[0]
            for (let i = START_PROGRAMS_COL; i < row.length; ++i) {
                const progId = header[i]
                const condition = row[i].trim()
                if (!condition) {
                    continue
                }

                let cond;
                if (condition[0] === '<') {
                    cond = {op: "lt", qid, value: condition.slice(1).trim()}
                } else { // equals
                    cond = {op: "eq", qid, value: condition.toLowerCase()}
                }
                rules[progId].push(cond)
            }
        }

        const trans = []
        for (const prog in rules) {
            trans.push({program: prog, rules: rules[prog]})
        }

        fs.writeFileSync('rules.json', JSON.stringify(trans))
    })
}

main()
