 enterkey = document.getElementById("enterkey");

function save_options() {
  var key = pressedkey;
  localStorage["ptt_key"] = key;
  $('#status').html("Key saved.");
}

function restore_options() {
  var savedkey = localStorage["ptt_key"];
  if (!savedkey) {
    return;
  }
  $(enterkey).val(savedkey);
}

enterkey.addEventListener("keydown",function(e){
  pressedkey = e.keyCode;
  $(enterkey).val(e.keyIdentifier);
  e.preventDefault(); //Stop char entry showing
}, false);

$('#save').on("click", function(){
  save_options();
});

$(document).ready(function() {
 restore_options();
});
