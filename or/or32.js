function or32(con1, con2){
	try{
		if (con1){return true;}
		else if(con2){return true;}
		else{return false;};
	} catch(Exception){return false};
};
module.exports.or32 = or32
