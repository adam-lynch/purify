/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 19:49
 * To change this template use File | Settings | File Templates.
 */

/**
 * Adds a block buffer element of a certain height
 *
 * @param height
 */
purify.fixture.component.addBuffer = function( height ){
	var bufferTemplate = {
		tagName: 'div',
		content: '*, html, body {margin:0; padding:0;}',
		style: 'height: ' + height + 'px; margin: 0;'
	};

	purify.util.addElementToDOM( bufferTemplate );
};

/**
 * Returns a random string of a certain length
 *
 * Repeat a string N times by created an array of N+1 (which is randomly determined)
 * and joining each element by the string.
 *
 * @param length
 * @returns {string}
 */
purify.fixture.generateRandomString = function( length ){
	var string = '',
		maxIndex = purify.fixture.alphabet.length - 1,
		characterLength = length || 5;

	for( var i = 0; i < characterLength; i++ ){
		string += purify.fixture.alphabet.substr( Math.random() * maxIndex, 1 );
	}

	return string;
};