purify.util = {};

purify.util.getOffset = function( obj ){
	var curtop = curleft = 0;
	if (obj.offsetParent) {
		do {
			curtop += obj.offsetTop;
			curleft += obj.offsetLeft;
		} while (obj = obj.offsetParent);
	}
	return {top:curtop, left:curleft};
};