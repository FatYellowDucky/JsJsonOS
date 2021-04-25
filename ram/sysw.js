function sysw(sysaddress, sysnewmem){
	const fs = require('fs')
	var x=fs.readFileSync(__dirname+'\\'+'ram.json').toString()
	var rmem=JSON.parse(x);
	var y=''+sysaddress
	rmem.sysvars[y] = sysnewmem;
	fs.writeFileSync(__dirname+'\\'+'ram.json', JSON.stringify(rmem, null, '	'))
}
module.exports.sysw = sysw
