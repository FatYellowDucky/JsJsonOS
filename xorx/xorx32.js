function xorx32(con1, con2){
	try{
		if (con1){return true;}
		else if(con2){return true;}
		else{return false;};
	} catch(Exception){return false};
};
module.exports.xorx32 = xorx32
