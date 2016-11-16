document.getElementsByClassName("parallax").onscroll = function() {onScrollJS()};

function onScrollJS() {
  if ($(document.getElementsByClassName("parallax")).scrollTop() > 470) {
    $(".mainTitle").addClass("mainTitleChanged");
  }

  else {
    $(".mainTitle").removeClass("mainTitleChanged");
  }
}
