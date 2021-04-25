function sysreset(){
    const fs = require('fs')
    var x=fs.readFileSync(__dirname+'\\ram.json').toString()
	var rmem=JSON.parse(x);
    x={
        "area":"ram",
        "sysvars":{},
    }
    x.vars = rmem.vars
    fs.writeFileSync(__dirname+'\\'+'ram.json', JSON.stringify(x, null, '	'))
}
module.exports.sysreset = sysreset

