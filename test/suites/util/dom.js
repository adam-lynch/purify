describe( "DOM util functions", function(){

	beforeEach( function(){
		purify.fixture.clean();
	} );

	afterEach( function(){
		purify.fixture.clean();
	} );

	it( "inserts an already created element into the DOM", function(){

		var tagName = 'p',
			selector = tagName + '.' + purify.fixture.selector,
			originalNumberOfElements = document.querySelectorAll( selector ).length,
			elem = document.createElement( tagName );

		purify.util.insertElement( elem );

		var currentNumberOfElements = document.querySelectorAll( selector ).length;
		expect( currentNumberOfElements ).toBe( originalNumberOfElements + 1 );
	} );

	it( "creates an already of a given make-up, including string content", function(){

		var elementTemplate = {
			tagName: 'p',
			content: 'Hello, World!'
		};

		var newlyAddedElement = purify.util.createElement( elementTemplate );

		expect( newlyAddedElement.tagName.toLowerCase() ).toBe( elementTemplate.tagName );
		expect( newlyAddedElement.innerHTML ).toBe( elementTemplate.content );
	} );

	it( "inserts an element of a given make-up, including a single child element when it's passed", function(){
		var parentTagName = 'div',
			parentSelector = parentTagName + '.' + purify.fixture.selector,
			originalNumberOfElements = document.querySelectorAll( parentSelector ).length,
			childTagName = 'p',
			childTemplate = {
				tagName: childTagName,
				content: 'Hello, World!',
				style:   'overflow: hidden;'
			},
			temporaryChild = purify.util.createElement( childTemplate );

		expect( typeof temporaryChild ).toBe( 'object' );
		expect( temporaryChild.innerHTML ).toBe( childTemplate.content );
		expect( temporaryChild.tagName.toLowerCase() ).toBe( childTemplate.tagName );

		var parentTemplate = {
			tagName: parentTagName,
			content: temporaryChild,
			style:   'color: yellow'
		};

		purify.util.addElementToDOM( parentTemplate );

		//has one more element been added?
		var elements = document.querySelectorAll( parentSelector ),
			numberOfElements = elements.length;

		expect( numberOfElements ).toBe( originalNumberOfElements + 1 );

		//get the new element
		var newlyAddedElement = elements[numberOfElements - 1];

		//does it have the same tag name and style?
		expect( newlyAddedElement.tagName.toLowerCase() ).toBe( parentTemplate.tagName );
		//expect( newlyAddedElement.style.overflow ).toBe( 'hidden' );

		//get its children, of which there should only be one
		var newlyAddedChildren = newlyAddedElement.children;
		expect( newlyAddedChildren.length ).toBe( 1 );

		//does it have the right tag name, html, and style?
		var newlyAddedChild = newlyAddedChildren[0];
		expect( newlyAddedChild.tagName.toLowerCase() ).toBe( childTemplate.tagName );
		expect( newlyAddedChild.innerHTML ).toBe( childTemplate.content );
		//expect( newlyAddedChild.style.color ).toBe( 'yellow' );
	} );

} );