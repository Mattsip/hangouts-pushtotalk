var pttkey;
var down;

chrome.extension.sendMessage({method: "getStatus"}, function(response) {
	pttkey = response.status;
	console.log(response.status);
});

var mouseup = document.createEvent("MouseEvents");
var mousedown = document.createEvent("MouseEvents");

mouseup.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
mousedown.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

$(window).on({
	keydown: function(e) {
		if(e.which == pttkey && !down) {
			down = true;
			targetbutton = $('div[role="button"][aria-label="Unmute microphone"][aria-pressed="true"] div')[0];
			targetbutton.dispatchEvent(mousedown);
			targetbutton.dispatchEvent(mouseup);
		}
	},
	keyup: function(e) {
		if(e.which == pttkey) {
			down = false;
			targetbutton = $('div[role="button"][aria-label="Mute microphone"][aria-pressed="false"] div')[0];
			targetbutton.dispatchEvent(mousedown);
			targetbutton.dispatchEvent(mouseup);
		}
	}
});