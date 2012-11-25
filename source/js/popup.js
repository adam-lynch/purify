var tabId = null;

function highlightBlockquotes(e) {
    //get "Jump to first quote" checkbox state
    var jumpFirstQuoteState = document.getElementById('jump-quote').checked;
    
	chrome.browserAction.setBadgeText ( { text: "..." } );
	chrome.tabs.executeScript(tabId, 
		{code:"purify = {'color': 'yellow', 'jumpToFirstQuote': " + jumpFirstQuoteState + "}" }, 
		function(){ 
			chrome.tabs.executeScript(tabId, {file: "js/highlightBlockquotes.js"},
				function(){
					chrome.tabs.executeScript(tabId, 
						{code:"purify.highlightBlockquotes()"}, 
						function(){chrome.browserAction.setBadgeText ( { text: "done" } );
							setTimeout(function() { 
								chrome.browserAction.setBadgeText ( { text: "" } ); 
							}, 1000);
						}
					);
				}
			); 
		} 
	);
}

//addclickhandlers for buttons & checkbox
document.addEventListener('DOMContentLoaded', function () {
	//button click
	var hightlightButton = document.getElementById("highlight-btn");
	hightlightButton.addEventListener('click', highlightBlockquotes);
});
