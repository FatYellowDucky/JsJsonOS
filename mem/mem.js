const write = require('./write.js')
const read = require('./read.js')
const del = require('./deletememslot.js')
module.exports.write = write.write
module.exports.read = read.read
module.exports.del = del.del