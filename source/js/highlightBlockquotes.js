purify.highlightBlockquotes = function(doc){

	if(!doc) {
		doc = document;
	}

	var blockquotes = doc.querySelectorAll('blockquote');

	if(blockquotes.length){
		
		for(var i = 0; i < blockquotes.length; i++){
			
            var blockquote = blockquotes[i],
				blockquoteStyle = blockquote.style,
				textColor = 'yellow'==purify.color?'black':'white';
            
            //change styles:
			blockquoteStyleheight = blockquote.offsetHeight+'px';
			blockquoteStyle.overflowY = 'scroll'
			blockquoteStyle.backgroundColor = purify.color;
			blockquoteStyle.backgroundImage = 'none';
			blockquoteStyle.fontFamily = 'serif';
			blockquoteStyle.fontSize = '18px';
			blockquoteStyle.color = textColor;
			blockquoteStyle.borderColor = purify.color;
			blockquoteStyle.borderLeftColor = 'black';
            
            //jump to first quote
			if(0 == i && purify.jumpToFirstQuote){
				blockquote.scrollIntoView(true);
			}
		}
	}
	
};