function write(address, newmem){
	const fs = require('fs')
	var x=fs.readFileSync(__dirname+'\\'+'sysmem.json').toString()
	var mem=JSON.parse(x);
	var y=''+address
	mem.data[y] = newmem;
	fs.writeFileSync(__dirname+'\\'+'sysmem.json', JSON.stringify(mem, null, '	'))
} module.exports.write = write