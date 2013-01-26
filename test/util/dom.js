/**
 * Created with JetBrains PhpStorm.
 * User: Adam
 * Date: 26/01/13
 * Time: 19:35
 * To change this template use File | Settings | File Templates.
 */

/**
 * Creates and appends an element to the <body>
 *
 * @param args
 */
purify.util.addElementToDOM = function( args ){
	var elem = purify.util.createElement.apply( this, arguments );

	purify.util.insertElement( elem, args.parent );
};

/**
 * Creates a HTML element ready be to added to the DOM
 *
 * @param params
 * @returns {*}
 */
purify.util.createElement = function( params ){
	var args = arguments[0];
	var elem = document.createElement( args.tagName );

	if( args.content ){
		//HTML element (created previously)
		if( 'object' === typeof args.content ){
			//append the element inside our new element
			purify.util.insertElement( args.content, elem );
		}
		else{//string
			elem.innerHTML = args.content;
		}
	}

	if( args.style ){
		elem.style = args.style;
	}

	/*
	 * add our own specific class name
	 * so we can easily remove fixtures later if needs be
	 */

	elem.className += ' ' + purify.fixture.selector;

	return elem;
};

/**
 * Appends an element to the <body> or a specified element
 *
 * @param elem
 * @param parent
 */
purify.util.insertElement = function( elem, parent ){

	var location = parent ? parent : document.body;

	elem.className += ' ' + purify.fixture.selector;

	location.appendChild( elem );
};