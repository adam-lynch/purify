// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var tabId = null;

function buttonClick(e) {
	chrome.browserAction.setBadgeText ( { text: "..." } );
	chrome.tabs.executeScript(tabId, 
		{code:"purify = {'color':'"+e.target.id+"'}" }, 
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

function changeHandler(e) {
	chrome.browserAction.setBadgeText ( { text: "..." } );
        chrome.tabs.executeScript(tabId,
                {code:"purify = {'color':'"+e.target.id+"'}" },
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
	var btn = document.getElementById("highlight-btn");
	btn.addEventListener('click', buttonClick);
	
	//on checkbox change
	document.querySelector('#jump-quote').addEventListener('change', changeHandler);
});
