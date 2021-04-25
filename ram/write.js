function write(address, newmem){
	const fs = require('fs')
	var x=fs.readFileSync(__dirname+'\\'+'ram.json').toString()
	var vmem=JSON.parse(x);
	var y=''+address
	vmem.vars[y] = newmem;
	fs.writeFileSync(__dirname+'\\'+'ram.json', JSON.stringify(vmem, null, '	'))
}
module.exports.write = write