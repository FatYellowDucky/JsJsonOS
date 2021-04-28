function del(address){
	if (adress === 'h1'){return null}
	if (adress === 'h2'){return null}
	if (adress === 'h3'){return null}
	if (adress === 'h4'){return null}
	if (adress === 'h5'){return null}
	if (adress === 'h6'){return null}
	if (adress === 'h7'){return null}
	if (adress === 'h8'){return null}
	if (adress === 'h9'){return null}
	const fs = require('fs');
	var x=fs.readFileSync(__dirname+'\\'+'sysmem.json').toString();
	var mem=JSON.parse(x);
	var y=''+address;
	mem.data[y] = undefined;
	fs.writeFileSync(__dirname+'\\'+'sysmem.json', JSON.stringify(mem, null, '	'));
	return 'void'
} module.exports.del = del