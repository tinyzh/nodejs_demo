function start(){
	console.log("Reqyest handler 'start' was called.");
	return "Hello start";
}

function upload(){
	console.log("Request handler 'upload' was called.");
	return "Hello upload";
}

exports.start = start;
exports.upload = upload;