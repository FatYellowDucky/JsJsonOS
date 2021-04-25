function write(ars, nmem){
	const fs = require('fs')
	x=fs.readFileSync(__dirname+'\\vam.json').toString()
	vmem=JSON.parse(x);
	y=''+ars
	vmem.vars[y] = nmem;
	x=fs.writeFileSync(__dirname+'\\'+'vam.json', JSON.stringify(vmem, null, '	'))
}
module.exports.write = write
