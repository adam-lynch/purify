purify.highlightBlockquotes = function(){

	var blockquotes = document.querySelectorAll( 'blockquote' );

	if( blockquotes.length ){

		for( var i = 0; i < blockquotes.length; i++ ){

			var blockquote = blockquotes[i],
				blockquoteStyle = blockquote.style,
				textColor = 'yellow' == purify.color ? 'black' : 'white';

			//change styles:
			blockquoteStyle.overflowY = 'scroll';
			blockquoteStyle.backgroundColor = purify.color;
			blockquoteStyle.backgroundImage = 'none';
			blockquoteStyle.fontFamily = 'serif';
			blockquoteStyle.fontSize = '18px';
			blockquoteStyle.color = textColor;
			blockquoteStyle.borderColor = purify.color;
			blockquoteStyle.borderLeftColor = 'black';

			//jump to first quote
			if( 0 == i && purify.jumpToFirstQuote ){
				window.scrollY = purify.util.getOffset( blockquote ).top;
			}
		}
	}

};