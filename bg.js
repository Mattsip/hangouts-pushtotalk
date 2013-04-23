chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage['ptt_key']});
    else
      sendResponse({}); // snub them.
});