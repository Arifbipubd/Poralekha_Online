/***What New Banner****/
$(".homeWhatsNewcarousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items:1,
      nav: false
    },
    600:{
      items:2,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
});


/******Popular Course****/
$('#carousel0').owlCarousel({
  // loop: true,
  margin: 15,
  // autoplay: true,
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
          items: 3,
          dots: false,
          nav: true
      }
  }
})
$('#carousel1').owlCarousel({
  // loop: true,
  margin: 10,
  // autoplay: true,
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
  // autoplay: true,
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
  // autoplay: true,
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
  // autoplay: true,
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
  // autoplay: true,
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
  // autoplay: true,
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
var button1 = document.querySelector('.click-1');
var box1 = document.querySelector('.box-1');

button1.addEventListener('click', function () {
  box1.classList.toggle('text-danger');
});


var button2 = document.querySelector('.click-2');
var box2 = document.querySelector('.box-2');

button2.addEventListener('click', function () {
  box2.classList.toggle('text-danger');
});


var button3 = document.querySelector('.click-3');
var box3 = document.querySelector('.box-3');

button3.addEventListener('click', function () {
  box3.classList.toggle('text-danger');
});


var button4 = document.querySelector('.click-4');
var box4 = document.querySelector('.box-4');

button4.addEventListener('click', function () {
  box4.classList.toggle('text-danger');
});