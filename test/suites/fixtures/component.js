/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 21:45
 * To change this template use File | Settings | File Templates.
 */

describe( "DOM component functions", function(){

	beforeEach( function(){
		purify.fixture.clean();
	} );

	afterEach( function(){
		purify.fixture.clean();
	} );


	it( "creates and inserts a blockquote with a specified length of characters inside", function(){
		var tagName = 'blockquote',
			selector = tagName + '.' + purify.fixture.selector,
			originalNumberOfElements = document.querySelectorAll( selector ).length,
			characterLength = 42;

		purify.fixture.component.addBlockquote( characterLength );

		var elements = document.querySelectorAll( selector ),
			numberOfElements = elements.length;

		expect( numberOfElements ).toBe( originalNumberOfElements + 1 );

		var newlyAddedElement = elements[numberOfElements - 1],
			children = newlyAddedElement.children;
		expect( children.length ).toBe( 1 );

		var child = children[0];
		expect( child.tagName.toLowerCase() ).toBe( 'p' );
		expect( child.innerHTML.length ).toBe( characterLength );
	} );

} );