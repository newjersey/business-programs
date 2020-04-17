const YAML = require('yaml')
const fs = require('fs')

function main() {
    console.log(process.argv[2], process.argv[3])

    const yamlIn = fs.readFileSync(process.argv[2]).toString()
    const doc = YAML.parse(yamlIn)
    fs.writeFileSync(process.argv[3], JSON.stringify(doc))
}

main()