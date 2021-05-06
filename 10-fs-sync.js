const {readFileSync, writeFileSync } = require('fs')
// read from file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second)

//write from file

writeFileSync('./content/result-sync.txt.txt',`here is the result: ${first},
 ${second}`,{flag: 'a'})