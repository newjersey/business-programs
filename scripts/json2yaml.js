const YAML = require('yaml')
const fs = require('fs')

function main() {
    console.log(process.argv[2], process.argv[3])

    const jsonIn = fs.readFileSync(process.argv[2]).toString()
    const doc = JSON.parse(jsonIn)
    fs.writeFileSync(process.argv[3], YAML.stringify(doc))
}

main()