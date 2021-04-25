function or64(con1, con2, con3, con4){
	try{
		if (con1){return true;}
		else if(con2){return true;}
        else if(con3){return true;}
        else if(con4){return true;}
		else{return false;};
	} catch(Exception){return false};
};
module.exports.or64 = or64
