// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function() {
  $("#categories_list a[data-method='delete']").each(function(index, element) {
    $(element).bind("ajax:beforeSend", function() {
      $('#categories_list').append('<div class="back-wall"><div>');
    });
  });
});

sendRequest = function(url, type) {
  $.ajax({
    type: type,
    url: url,
  });
}

Popup = function() {}

Popup.hideModal = function() {
  $('#modal_window').modal('hide');
}
