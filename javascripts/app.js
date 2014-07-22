

function pathIt() {
  paths = $('path');

  _.each(paths, function(path) {
    length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    //path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDasharray = length + ' ' + length;
    console.log(length);
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
  });
}

function noPath() {
  paths = $('.fade-svg');
  //paths.css("visibility", "hidden");
  paths.fadeOut(2000);
    $('.top-left').hover(function() {
    $('.top-left').css("backgroundColor", "lightgray");
    $('.middle-top').css("backgroundColor", "lightgray");
  }, function() {
    $('.top-left').css("backgroundColor", "white");
    $('.middle-top').css("backgroundColor", "white");
  });
  $('.middle-top').hover(function() {
    $('.top-left').css("backgroundColor", "lightgray");
    $('.middle-top').css("backgroundColor", "lightgray");
  }, function() {
    $('.top-left').css("backgroundColor", "white");
    $('.middle-top').css("backgroundColor", "white");
  });
  $('.bottom-left').hover(function() {
    $('.bottom-left').css("backgroundColor", "lightgray");
    $('.middle-bottom').css("backgroundColor", "lightgray");
  }, function() {
    $('.bottom-left').css("backgroundColor", "white");
    $('.middle-bottom').css("backgroundColor", "white");
  });
  $('.middle-bottom').hover(function() {
    $('.bottom-left').css("backgroundColor", "lightgray");
    $('.middle-bottom').css("backgroundColor", "lightgray");
  }, function() {
    $('.bottom-left').css("backgroundColor", "white");
    $('.middle-bottom').css("backgroundColor", "white");
  });
}




$(function () {
  $('.picture').hide();
  $('.list-info').hide();
  $('.blurb').hide();
//  pathIt();
//  setTimeout(function() {
//    $('.picture').fadeIn(1000);
//    $('.title').fadeIn(1000);
//    $('.bottom-right').fadeIn(1000);
//    $('.list-info').fadeIn(1000);
//    $('.blurb').fadeIn(1000);
//  }, 3000);
  setTimeout(function() {
    noPath();
  }, 4000);

});



