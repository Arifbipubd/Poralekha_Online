// My Course
var mixer = mixitup('.mixItUpContent',{
	animation:{
		effectsOut:'fade translateX(-100%)',
	}
});

//Video Button
$(document).ready(function () {
  
  $("a.playhtmlvid").click(function () {
    $(this).parents(".videoStart").find("video").trigger("play");
    $(this).hide();
    $(this).next("a.pausehtmlvid").show();
    // IF VIDEO HAS COVER
    var hasitcover = $(this).parents(".videoStart").find(".videoBody-cover");
    if (hasitcover.length > 0) {
      hasitcover.fadeOut();
    }
  });

  $("a.pausehtmlvid").click(function () {
    $(this).parents(".videoStart").find("video").trigger("pause");
    $(this).hide();
    $(this).prev("a.playhtmlvid").show();
  });


  $(".videoBody-video video").on("ended", function () {
    var hasitcovertwo = $(this).parents(".videoStart").find(".videoBody-cover");
    if (hasitcovertwo.length > 0) {
      hasitcovertwo.fadeIn();
    }
    $(this).parents(".videoStart").find("a.playhtmlvid").show();
    $(this).parents(".videoStart").find("a.pausehtmlvid").hide();
  });
});

