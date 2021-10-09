/***What New Banner****/
$(".homeWhatsNewcarousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: false
    }
  }
});

/***Popular Course*/
$('#carousel0').owlCarousel({
  // loop: true,
  margin: 15,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})


// Top rated teacher
$('#carousel1').owlCarousel({
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})
$('#carousel2').owlCarousel({
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})
$('#carousel3').owlCarousel({
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})
$('#carousel4').owlCarousel({
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})
$('#carousel5').owlCarousel({
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})
$('#carousel6').owlCarousel({
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<span class='fas fa-arrow-circle-left' </span>", "<span class='fas fa-arrow-circle-right' </span>"
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false
    },
    600: {
      items: 2,
      dots: false,
      nav: false
    },
    1000: {
      items: 2,
      dots: false,
      nav: true
    },
    1100: {
      items: 4,
      dots: false,
      nav: true
    }
  }
})

// Bookmarks Color toggle
const toggleBtns = document.querySelectorAll('.toggle-box');
toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('toggle-pressed');
  });
})

// Otp-Verification
function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}


//hide toggle
$(".toggle-password").click(function () {
  $(this).toggleClass("fa fa-eye-slash");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// Active

var selector = '.accordion .cursor';

$(selector).on('click', function () {
  $(selector).removeClass('active');
  $(this).addClass('active');
});

//Course Playlist Accordian button click change

function btnCheck(check) {
  if (check == "fileUpload") {
    document.querySelector('.video').style.display = "none";
    document.querySelector('.mcq').style.display = "none";
    document.querySelector('.demo').style.display = "none";
    document.querySelector('.fileUpload').style.display = "block";
  }
  else if (check == "video") {
    document.querySelector('.video').style.display = "block";
    document.querySelector('.mcq').style.display = "none";
    document.querySelector('.demo').style.display = "none";
    document.querySelector('.fileUpload').style.display = "none";
  }
  else if (check = "mcq") {
    document.querySelector('.video').style.display = "none";
    document.querySelector('.mcq').style.display = "block";
    document.querySelector('.fileUpload').style.display = "none";
    document.querySelector('.demo').style.display = "none";
  }
}

//Student profile Replace Div

function toggleChange(change, name) {
  if (change == "change") {
    document.querySelector(".none-" + name).style.display = "none";
    document.querySelector(".block-" + name).style.display = "block";
  }
  else if (change == "unchange") {
    document.querySelector(".none-" + name).style.display = "block";
    document.querySelector(".block-" + name).style.display = "none";
  }

}


//Image Upload

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}


function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});



//Reply And Comment

function submit_comment() {
  var comment = $('.commentar').val();
  el = document.createElement('li');
  el.className = "box_result row";
  el.innerHTML =
    '<div class=\"col-md-1\">' +
    // user image link
    '<div class=\"avatar_comment\">' +
    '<img src=\"Assets/Images/SingleCourse/2authorLogo.png\" alt=\"avatar\"/>' +
    '</div>' +
    '</div>' +
    '<div class=\"result_comment col-md-11\">' +
    '<h4 class=\"tools_comment\">Anonimous <span aria-hidden=\"true\"> · </span><span>1m</span></h4>' +
    '<p>' + comment + '</p>' +
    '<div class=\"tools_comment\">' +
    '<a class=\"replay\" href=\"#\">Reply</a>' +
    '</div>' +
    '<ul class="child_replay"></ul>' +
    '</div>';
  document.getElementById('list_comment').prepend(el);
  $('.commentar').val('');
}

$(document).ready(function () {

  // $('#list_comment').on('click', '.replay', function (e) {
  //     cancel_reply();
  //     $current = $(this);
  //     el = document.createElement('li');
  //     el.className = "box_reply row";
  //     el.innerHTML =
  //     '<div class=\"col-md-12 reply_comment\">' +
  //        '<div class=\"row\">' +
  //             '<div class=\"col-md-1\">' + 

  //                '<div class=\"avatar_comment\">'+
  //                   '<img src=\"https://images.unsplash.com/photo-1592492152545-9695d3f473f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80\" alt=\"avatar\"/>' +
  //                '</div>' +
  //             '</div>' +
  //             '<div class=\" d-flex gx-0 col-md-10\">' +
  //                  '<textarea class=\"box_comment comment_replay w-50\" placeholder=\"Add a comment...\"></textarea>' +
  //                 '<div class=\"box_post\">' +
  //                    '<button class=\"cancel btn btn3 bg-cl-pm mx-1 px-1\" onclick=\"cancel_reply()\" type=\"button\">Cancel</button>' +
  //                    '<button class=\"btn btn3 bg-cl-pm  px-1" onclick=\"submit_reply()\" type=\"button\" value=\"1\">Reply</button>' +
  //                '</div>' +
  //            '</div>' +
  //         '</div>' +
  //     '</div>';
  //     $current.closest('li').find('.child_replay').prepend(el);
  // });
});

function submit_reply() {
  var comment_replay = $('.comment_replay').val();
  el = document.createElement('li');
  el.className = "box_reply row";
  el.innerHTML =
    '<div class=\"col-md-1\">' +
    '<div class=\"avatar_comment\">' +
    '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>' +
    '</div>' +
    '</div>' +
    '<div class=\"result_comment col-md-11\">' +
    '<h4 class=\"tools_comment\">Anonimous <span aria-hidden=\"true\"> · </span><span>1m</span></h4>' +
    '<p>' + comment_replay + '</p>' +
    '<div class=\"tools_comment\">' +
    '<a class=\"replay\" href=\"#\">Reply</a>' +
    '</div>' +
    '<ul class="child_replay"></ul>' +
    '</div>';
  $current.closest('li').find('.child_replay').prepend(el);
  $('.comment_replay').val('');
  cancel_reply();
}

function cancel_reply() {
  $('.reply_comment').remove();
}

//Paginations

// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) { //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }

  if (page > 2) { //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if (page == plength) { //if page is equal to plength than assign active string in the active variable
      active = "active";
    } else { //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}




//MultiHandle Range

setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);

function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
  var slider = document.getElementById(idX);
  var between = document.getElementById(btwX);
  var button1 = document.getElementById(btn1X);
  var button2 = document.getElementById(btn2X);
  var inpt1 = document.getElementById(input1);
  var inpt2 = document.getElementById(input2);

  var min = inpt1.min;
  var max = inpt1.max;

  /*init*/
  var sliderCoords = getCoords(slider);
  button1.style.marginLeft = '0px';
  button2.style.marginLeft = (slider.offsetWidth - button1.offsetWidth) + 'px';
  between.style.width = (slider.offsetWidth - button1.offsetWidth) + 'px';
  inpt1.value = min;
  inpt2.value = max;

  inpt1.onchange = function (evt) {
    if (parseInt(inpt1.value) < min)
      inpt1.value = min;
    if (parseInt(inpt1.value) > max)
      inpt1.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }


    var sliderCoords = getCoords(slider);
    var per1 = parseInt(inpt1.value - min) * 100 / (max - min);
    var per2 = parseInt(inpt2.value - min) * 100 / (max - min);
    var left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
    var left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
    }
    else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  }
  inpt2.onchange = function (evt) {
    if (parseInt(inpt2.value) < min)
      inpt2.value = min;
    if (parseInt(inpt2.value) > max)
      inpt2.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }

    var sliderCoords = getCoords(slider);
    var per1 = parseInt(inpt1.value - min) * 100 / (max - min);
    var per2 = parseInt(inpt2.value - min) * 100 / (max - min);
    var left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
    var left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
    }
    else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  }

  /*mouse*/
  button1.onmousedown = function (evt) {
    var sliderCoords = getCoords(slider);
    var betweenCoords = getCoords(between);
    var buttonCoords1 = getCoords(button1);
    var buttonCoords2 = getCoords(button2);
    var shiftX2 = evt.pageX - buttonCoords2.left;
    var shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function (evt) {
      var left1 = evt.pageX - shiftX1 - sliderCoords.left;
      var right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;
      button1.style.marginLeft = left1 + 'px';


      shiftX2 = evt.pageX - buttonCoords2.left;
      var left2 = evt.pageX - shiftX2 - sliderCoords.left;
      var right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;

      var per_min = 0;
      var per_max = 0;
      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';

        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';

        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
      inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  button2.onmousedown = function (evt) {
    var sliderCoords = getCoords(slider);
    var betweenCoords = getCoords(between);
    var buttonCoords1 = getCoords(button1);
    var buttonCoords2 = getCoords(button2);
    var shiftX2 = evt.pageX - buttonCoords2.left;
    var shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function (evt) {
      var left2 = evt.pageX - shiftX2 - sliderCoords.left;
      var right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;
      button2.style.marginLeft = left2 + 'px';


      shiftX1 = evt.pageX - buttonCoords1.left;
      var left1 = evt.pageX - shiftX1 - sliderCoords.left;
      var right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;

      var per_min = 0;
      var per_max = 0;

      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';
        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';
        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
      inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  button1.ondragstart = function () {
    return false;
  };
  button2.ondragstart = function () {
    return false;
  };

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

}



