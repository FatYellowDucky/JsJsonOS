function read(adress){
    const fs = require('fs')
    const x=fs.readFileSync(__dirname+'\\'+'ram.json').toString()
    var y=JSON.parse(x)
    return y.vars[adress]
}
function sysread(adress){
    const fs = require('fs')
    const x=fs.readFileSync(__dirname+'\\'+'ram.json').toString()
    var y=JSON.parse(x)
    return y.sysvars[adress]
}
module.exports.read = read
module.exports.sysread = sysread
