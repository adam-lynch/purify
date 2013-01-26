describe( "blockquote highlighter", function(){

	beforeEach( function(){
		purify.fixture.clean();
		purify.color = 'pink';
		purify.jumpToFirstQuote = false;
		window.scroll( 0, 0 );//make sure document is scrolled to top before running a test

		//START adding HTML fixtures

		//add a <style> to crudely reset CSS defaults
		purify.fixture.style.resetMarginAndPadding();

		purify.fixture.component.addBuffer( 1000 );//100px tall

		//add two blockquotes
		for( var i = 0; i < 2; i++ ){
			purify.fixture.component.addBlockquote( 40 );//40 random characters
		}

		purify.fixture.component.addBuffer( 1000 );
	} );

	afterEach( function(){
		purify.fixture.clean();
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
			var blockquoteBefore = blockquotes[i],
				blockquoteBeforeStyle = blockquoteBefore.style,
				backgroundColor = colors[colors.length % i];

			blockquoteBeforeStyle.backgroundColor = backgroundColor;

			expect( blockquoteBeforeStyle.backgroundColor ).not.toBe( 'transparent' );
			expect( blockquoteBeforeStyle.backgroundColor ).not.toBe( 'white' );
			expect( blockquoteBeforeStyle.backgroundColor ).toBe( backgroundColor );
		}

		purify.highlightBlockquotes();//this is where the magic happens

		for( var j = 0; j < blockquotes; j++ ){
			var blockquoteAfter = blockquotes[j],
				blockquoteAfterStyle = blockquoteAfter.style;

			expect( blockquoteAfterStyle.backgroundColor ).toBe( purify.color );
		}
	} );
} );