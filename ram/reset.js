function reset(){
    const fs = require('fs')
    var x=fs.readFileSync(__dirname+'\\ram.json').toString()
	var rmem=JSON.parse(x);
    x={
        "area":"ram",
        "vars":{},
    }
    x.sysvars = rmem.sysvars
    fs.writeFileSync(__dirname+'\\'+'ram.json', JSON.stringify(x, null, '	'))
}
module.exports.reset = reset
