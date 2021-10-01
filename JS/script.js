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



