/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 20:24
 * To change this template use File | Settings | File Templates.
 */

/**
 * Adds a <blockquote>
 *
 * @param length
 * @param parent
 */
purify.fixture.component.addBlockquote = function( length, parent ){

	var paragraphTemplate = {
			tagName: 'p',
			content: purify.fixture.generateRandomString( length )
		},
		paragraph = purify.util.createElement( paragraphTemplate ),
		blockquoteTemplate = {
			tagName: 'blockquote',
			content: paragraph,
			parent:  parent
		};

	//add blockquote to the DOM
	purify.util.addElementToDOM( blockquoteTemplate );
};