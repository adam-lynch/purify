function onRequest(request, sender, sendResponse)
{
    alert(request);
    chrome.pageAction.show(sender.tab.id);
    sendResponse('blah blah');
}

chrome.extension.onRequest.addListener(onRequest);