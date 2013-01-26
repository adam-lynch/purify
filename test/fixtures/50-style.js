/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 19:22
 * To change this template use File | Settings | File Templates.
 */

/**
 * Crudely sets all elements' margin and padding to zero
 */
purify.fixture.style.resetMarginAndPadding = function(){
	var styleTemplate = {
		tagName: 'style',
		content: '*, html, body {margin:0; padding:0;}'
	}

	purify.util.addElementToDOM( styleTemplate );
};