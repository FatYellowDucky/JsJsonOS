function del(address){
	const fs = require('fs');
	var x=fs.readFileSync(__dirname+'\\'+'mem.json').toString();
	var mem=JSON.parse(x);
	var y=''+address;
	mem.data[y] = undefined;
	fs.writeFileSync(__dirname+'\\'+'mem.json', JSON.stringify(mem, null, '	'));
} module.exports.del = del