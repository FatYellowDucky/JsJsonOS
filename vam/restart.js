function restart(){
    const fs = require('fs')
    x={
        "area":"vam",
        "vars":{},
        "sysvars":{}
    }
    fs.writeFileSync(__dirname+'\\'+'vam.json', JSON.stringify(x, null, '	'))
}
module.exports.restart = restart
