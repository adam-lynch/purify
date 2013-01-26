/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 19:53
 * To change this template use File | Settings | File Templates.
 */

/**
 * Removes all elements (filterable by tag name) which we've added to the DOM
 *
 * @param tagName
 */
purify.fixture.clean = function( tagName ){
	var selector = (tagName ? tagName : '') + '.' + purify.fixture.selector,
		elements = document.querySelectorAll( selector );

	for( var i = 0; i < elements.length; i++ ){
		var elem = elements[i];

		elem.parentNode.removeChild( elem );
	}
};