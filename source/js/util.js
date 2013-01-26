/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 24/01/13
 * Time: 00:27
 * To change this template use File | Settings | File Templates.
 */

purify.util.getOffset = function( obj ){

	var curtop = curleft = 0;
	if( obj.offsetParent ){
		do{
			curtop += obj.offsetTop;
			curleft += obj.offsetLeft;
		}while( obj = obj.offsetParent );
	}
	return {top: curtop, left: curleft};
};