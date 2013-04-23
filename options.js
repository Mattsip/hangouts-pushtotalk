function save_options() {
  var key = $('#enterkey').val();
  localStorage["ptt_key"] = key;
  $('#status').html("Key saved.");
}

function restore_options() {
  var savedkey = localStorage["ptt_key"];
  if (!savedkey) {
    return;
  }
  $('#enterkey').val(savedkey);
}

$("#enterkey").keyup(function(e) {
  $(this).val(e.which);
});

$('#save').on("click", function(){
  save_options();
});

$(document).ready(function() {
 restore_options();
});
