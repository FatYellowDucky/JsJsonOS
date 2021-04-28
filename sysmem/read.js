function read(adress){
	const fs = require('fs')
	const x=fs.readFileSync(__dirname+'\\'+'sysmem.json').toString()
	var y=JSON.parse(x)
	return y.data[adress]
} module.exports.read = read