/*
Generate skeleton of from.json from the spreadsheet definition
*/
const fs = require('fs')
const assert = require('assert')
const csv = require('csv')

function genQuestion(row) {
    const qinput = function() {
        switch (row[3].trim()) {
            case "Y/N":
            case "Y/N; if No to previous":
                return {type: "boolean", required: true}
            case "Number":
                const inst = row[4] // example
                return {type: "dollar-amount", required: true, instructions: inst}
            case "Select":
                const optText = row[4].split("\n").map(r => r.trim())
                const options = optText.map(txt => {
                    return {id: "TODO", name: txt}
                })
                return {type: "dropdown", required: true, options}
            case "Y/N/Not sure":
                const ynns = [
                    {id: "yes", name: "Yes"},
                    {id: "no", name: "No"},
                    {id: "not-sure", name: "Not Sure"}
                ]
                return {type: "singleselect", ynns}
            default:
                assert(false, row[3])
        }
    }()

    return {
        id: row[0],
        name: row[2],
        ...qinput,
    }
}

function main() {

    const input = fs.readFileSync(process.argv[2]);

    csv.parse(input, {
        comment: '#'
    }, function(err, rows) {
        console.log("rows", rows.length)
        const root = {
            state: "CA",
            seal: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Seal_of_California.svg",
            pages: [{
                title: "Page title",
                heading: "idk",
                questions: rows.slice(2).map(genQuestion)
            }]
        }

        fs.writeFileSync('form.json', JSON.stringify(root))
    })
}

main()
