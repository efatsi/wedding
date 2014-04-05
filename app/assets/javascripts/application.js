// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

if ($(".bridesmaids").length) {
  // if on /peeps page

  circleUp = function() {
    var bridesmaids    = $(".bridesmaids").children("li")
    var step           = (2 * Math.PI)/bridesmaids.length;
    var angle          = 30.2;
    var halfway        = Math.max($(window).width() / 2, 400)
    var circleCenterX  = halfway - 90;
    var circleCenterY  = 320;
    var radius         = 250;
    for(i = 0; i < bridesmaids.length; i++)
    {
      var $element           = $(bridesmaids[i]);
      var $image             = $element.children(".image")
      var liLeft             = Number(Math.round(circleCenterX + radius * Math.cos(angle)));
      var liTop              = Number(Math.round(circleCenterY + radius * Math.sin(angle)));
      $element.css("left", liLeft + "px");
      $element.css("top", liTop + "px");
      $image.css("background-image", "url('" + $image.data("image") + "')");
      angle              += step;
    }

    var groomsman      = $(".groomsman").children("li")
    var angle          = 98.8;
    var circleCenterY  = 1060;
    for(i = 0; i < groomsman.length; i++)
    {
      var $element           = $(groomsman[i]);
      var $image             = $element.children(".image")
      var liLeft             = Number(Math.round(circleCenterX + radius * Math.cos(angle)));
      var liTop              = Number(Math.round(circleCenterY + radius * Math.sin(angle)));
      $element.css("left", liLeft + "px");
      $element.css("top", liTop + "px");
      $image.css("background-image", "url('" + $image.data("image") + "')");
      angle              += step;
    }
  }

  circleUp()

  window.onresize = function(event) {
    circleUp()
  };
}

$(".alert-close").click(function(e) {
  e.preventDefault();
  $(".alert").slideUp();
})
