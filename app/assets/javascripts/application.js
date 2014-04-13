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

// apiKey = "AIzaSyBJWhTJnSJUoplLjz_GBsoudyKOCSbcqvk";
function initialize()
{
  var myLatlng = new google.maps.LatLng(37.582544,-77.653414);

  var mapProp = {
    center: myLatlng,
    zoom: 13
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap") ,mapProp);

  var marker = new google.maps.Marker({
    position: myLatlng,
    animation: google.maps.Animation.DROP,
    map: map,
    title:"Hello World!"
  });

  var contentString = '<div id="markerOverlay">'+
      '<h3><a href="http://www.tuckahoeplantation.com/" target="_blank">Tuckahoe Plantation</a></h3>'+
      '<p>12601 River Road</p>' +
      '<p>Richmond, Virginia 23238</p>'+
      '<p><a href="https://www.google.com/maps/dir//Tuckahoe+Plantation,+12601+River+Rd,+Richmond,+VA+23238/@37.582544,-77.653414,17z/data=!4m12!1m3!3m2!1s0x0:0x252ce6150a5ca8c2!2sTuckahoe+Plantation!4m7!1m0!1m5!1m1!1s0x89b16bfffe83b50f:0x252ce6150a5ca8c2!2m2!1d-77.653414!2d37.582544?hl=en" target="_blank">Directions</a></p>'
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var styles = [
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "on"
    },
    {
      "saturation": -100
    },
    {
      "lightness": 40
    }]
  },
  {
    "featureType":"water",
    "elementType":"geometry",
    "stylers":[
    {
      "visibility":"on"
    },
    {
      "color":"#57DEC1"
    }]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "simplified"
    },
    {
      "saturation": -60
    },
    {
      "lightness": 10
    }]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "simplified"
    },
    {
      "saturation": -60
    },
    {
      "lightness": 60
    }]
  },
  {
    "featureType":"poi",
    "elementType":"geometry.fill",
    "stylers":[
    {
      "color":"#C5E3BF"
    }]
  }]

map.setOptions({styles: styles});
}

google.maps.event.addDomListener(window, 'load', initialize);
