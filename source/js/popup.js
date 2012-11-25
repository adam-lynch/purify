// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var tabId = null;

function highlightBlockquotes(e) {
    //get "Jump to first quote" checkbox state
    var jumpFirstQuoteState = document.getElementById('jump-quote').checked;
        
    console.log('----------');
    console.log('jumpFirstQuoteState is ' + jumpFirstQuoteState?1:0);
    console.log('jumpFirstQuoteState is ' + jumpFirstQuoteState);
    console.log('jumpFirstQuoteState is ' + document.getElementById('jump-quote'));
    console.log('----------');
    
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
