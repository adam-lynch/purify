describe( "blockquote highlighter", function(){

	//START adding HTML fixture

	document.addEventListener( 'DOMContentLoaded', function(){
		//add a <style> to crudely reset CSS defaults
		var documentBody = document.body,
			style = document.createElement( 'style' );

		style.innerHTML = '*, html, body {margin:0; padding:0;}';

		var bufferDiv = document.createElement( 'div' );
		bufferDiv.style = 'height: 1000px; margin: 0;';

		documentBody.appendChild( style );
		documentBody.appendChild( bufferDiv );

		//add two blockquotes
		for( var i = 0; i < 2; i++ ){

			var blockquote = document.createElement( 'blockquote' ),
				paragraph = document.createElement( 'p' );

			/*
			 Repeat a string N times by created an array of N+1 (which is randomly determined)
			 and joining each element by the string. N = min 1, max 4
			 */
			var max = Math.random() * 5;
			paragraph.innerHTML = Array( Math.ceil( max )).join( "skjdfksf" );

			blockquote.appendChild( paragraph );//put paragraph in blockquote
			documentBody.appendChild( blockquote );//add blockquote to the DOM
		}

		documentBody.appendChild( bufferDiv );

	});

	//END adding HTML fixture

	beforeEach( function(){
		purify.color = 'pink';
		purify.jumpToFirstQuote = false;
		window.scroll( 0, 0 );//make sure document is scrolled to top before running a test
	} );


	it( "doesn't change the scroll depth to the top of the first blockquote when jumpToFirstQuote is not true",
		function(){

			expect( document.body.scrollTop ).toBe( 0 );

			var blockquoteOffsetTop = purify.util.getOffset( document.querySelectorAll( 'blockquote' )[0] ).top;

			expect( blockquoteOffsetTop ).toBeGreaterThan( 0 );
			purify.highlightBlockquotes();//this is where the magic happens

			expect( window.scrollY ).toBe( 0 );//shouldn't have moved
		} );

	it( "changes the scroll depth to the top of the first blockquote when jumpToFirstQuote is true", function(){
		purify.jumpToFirstQuote = true;

		expect( document.body.scrollTop ).toBe( 0 );

		var blockquoteOffsetTop = purify.util.getOffset( document.querySelectorAll( 'blockquote' )[0] ).top;
		expect( blockquoteOffsetTop ).toBeGreaterThan( 0 );

		purify.highlightBlockquotes();//this is where the magic happens

		expect( window.scrollY ).toBe( blockquoteOffsetTop );
	} );


	it( "removes any background image from blockquote elements", function(){
		var blockquotes = document.querySelectorAll( 'blockquote' ),
			blockquote = blockquotes[Math.floor( Math.random() * blockquotes.length )],
			blockquoteStyle = blockquote.style;

		blockquoteStyle.backgroundImage = 'url("http://adamlynch.ie/styles/icons/apple-touch-icon-144-precomposed.png")';

		expect( blockquoteStyle.backgroundImage ).not.toBe( 'none' );

		purify.highlightBlockquotes();//this is where the magic happens

		expect( blockquoteStyle.backgroundImage ).toBe( 'none' );
	} );

	it( "changes background-color of all blockquote elements", function(){
		var blockquotes = document.querySelectorAll( 'blockquote' ),
			colors = ['blue', 'red', 'green', 'purple', 'yellow', 'black'];

		for( var i = 0; i < blockquotes; i++ ){
			var blockquote = blockquotes[i],
				blockquoteStyle = blockquote.style;

			blockquoteStyle.backgroundColor = colors[colors.length % i];

			expect( blockquoteStyle.backgroundColor ).not.toBe( 'transparent' );
			expect( blockquoteStyle.backgroundColor ).not.toBe( 'white' );
		}

		purify.highlightBlockquotes();//this is where the magic happens

		for( var i = 0; i < blockquotes; i++ ){
			expect( blockquoteStyle.backgroundColor ).toBe( purify.color );
		}
	} );
} );