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
      nav: false,
      // dots: false
    },
    600: {
      items: 2,
      nav: false,
      // dots: false
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 3,
      dots: false,
      // nav: true
    },
    1700: {
      items: 4,
      dots: false,
      // nav: true
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 4,
      dots: false,
      // nav: true
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 4,
      dots: false,
      // nav: true
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 4,
      dots: false,
      // nav: true
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 4,
      dots: false,
      // nav: true
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 4,
      dots: false,
      // nav: true
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
      // nav: false
    },
    600: {
      items: 2,
      dots: false,
      // nav: false
    },
    1000: {
      items: 2,
      dots: false,
      // nav: true
    },
    1100: {
      items: 4,
      dots: false,
      // nav: true
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

// Accordian Active
// .accordion .cursor
var selector = '.cursor';

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

// Course play list file upload

FilePond.create(
  document.querySelector('.fileUpload input')
);


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
  // its only for teacher profile payment3 or where 3 divs need to toggle
  else if (change == "tchProfile") {
    document.querySelector(".none-" + name).style.display = "none";
    document.querySelector(".block2-" + name).style.display = "block";
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

// course playlist mcq start
document.querySelector('.appear1').style.display = "none";
document.querySelector('.disappear2').style.display = "none";
function startMcq() {
  // disappear1.innerHTML = "";
  document.querySelector('.disappear1').style.display = "none";
  document.querySelector('.appear1').style.display = "block";

  var questions = [{
    question: "1. You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place ?",
    choices: ["1st", "2nd", "3rd", "None of the above"],
    correctAnswer: 0
  }, {
    question: "2. How many months have 28 days?",
    choices: ["2", "1", "All of them.", "Depends if there's a leap year or not."],
    correctAnswer: 2
  }, {
    question: "3. How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long?",
    choices: ["1", "25", "39", "None of the above"],
    correctAnswer: 0
  }, {
    question: "4.The answer is really big.",
    choices: ["THE ANSWER.", "Really big.", "An elephant.", "The data given is insufficient."],
    correctAnswer: 0
  }, {
    question: "5. Divide 30 by half and add ten.",
    choices: ["40.5", "50", "70", "I know this is a trick question, so NONE. Ha!"],
    correctAnswer: 2
  },
    // {
    // 	question: "6. Which software company developed JavaScript?",
    //     choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    //     correctAnswer: 1
    // },{
    // 	question: "7. What would be the result of 3+2+'7'?",
    //     choices: ["327", "12", "14", "57"],
    //     correctAnswer: 3
    // },{
    // 	question: "8. Look at the following selector: $('div'). What does it select?",
    //     choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    //     correctAnswer: 2
    // },{
    // 	question: "9. How can a value be appended to an array?",
    //     choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    //     correctAnswer: 1
    // },{
    // 	question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    //     choices: ["'32'", "'122'", "'13'", "'14'"],
    //     correctAnswer: 0
    // }
  ];


  var currentQuestion = 0;
  var viewingAns = 0;
  var correctAnswers = 0;
  var quizOver = false;
  var iSelectedAnswer = [];
  var mcqTime = 20;
  var c = mcqTime;
  var t;
  $(document).ready(function () {
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');

    timedCount();

    $(this).find(".preButton").on("click", function () {

      if (!quizOver) {
        if (currentQuestion == 0) { return false; }

        if (currentQuestion == 1) {
          $(".preButton").attr('disabled', 'disabled');
        }

        currentQuestion--; // Since we have already displayed the first question on DOM ready
        if (currentQuestion < questions.length) {
          displayCurrentQuestion();

        }
      } else {
        if (viewingAns == 3) { return false; }
        currentQuestion = 0; viewingAns = 3;
        viewResults();
      }
    });


    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
      if (!quizOver) {

        var val = $("input[type='radio']:checked").val();

        if (val == undefined) {
          $(document).find(".quizMessage").text("Please select an answer");
          $(document).find(".quizMessage").show();
        }
        else {
          // TODO: Remove any message -> not sure if this is efficient to call this each time....
          $(document).find(".quizMessage").hide();
          if (val == questions[currentQuestion].correctAnswer) {
            correctAnswers++;
          }
          iSelectedAnswer[currentQuestion] = val;

          currentQuestion++; // Since we have already displayed the first question on DOM ready
          if (currentQuestion >= 1) {
            $('.preButton').prop("disabled", false);
          }
          if (currentQuestion < questions.length) {
            displayCurrentQuestion();

          }
          else {
            displayScore();
            $('#iTimeShow').html('Quiz Time Completed!');
            // $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
            c = 185;
            $(document).find(".preButton").text("Previous Question").attr('disabled', 'disabled');
            $(document).find(".nextButton").text("Submit");
            quizOver = true;
            return false;
          }
        }

      }
      else {

        if (viewingAns == 3) {
          return false;
        }
        currentQuestion = 0;
        viewingAns = 3;
        viewResults();

      }
    });
  });



  function timedCount() {
    if (c == 185) {
      return false;
    }

    var hours = parseInt(c / 3600) % 24;
    var minutes = parseInt(c / 60) % 60;
    var seconds = c % 60;
    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    $('#timer').html(result);

    if (c == 0) {
      displayScore();
      $('#iTimeShow').html('Quiz Time Completed!');
      // $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
      c = 185;
      $(document).find(".preButton").text("Previous Question").attr('disabled', 'disabled');
      $(document).find(".nextButton").text("Submit");
      quizOver = true;
      return false;

    }


    c = c - 1;
    t = setTimeout(function () {
      timedCount()
    }, 1000);
  }


  // This displays the current question AND the choices
  function displayCurrentQuestion() {

    if (c == 185) {
      c = mcqTime;
      timedCount();
    }
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizJScontainer > .question");
    var choiceList = $(document).find(".quizJScontainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;


    for (i = 0; i < numChoices; i++) {
      choice = questions[currentQuestion].choices[i];

      if (iSelectedAnswer[currentQuestion] == i) {
        $('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
      } else {
        $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
      }
    }
  }

  function displayScore() {
    $(document).find(".quizJScontainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizJScontainer > .result").show();
    // Answer for backend
    console.log(correctAnswers);
  }

  // function hideScore() {
  //   $(document).find(".result").hide();
  // }

  // Result option redirect another page
  function viewResults() {
    document.getElementById('correctAnswer').innerText = correctAnswers;
    document.querySelector('.disappear2').style.display = "block";
    document.querySelector('.appear1').style.display = "none";
    document.querySelector('.disappear1').style.display = "none";
  }
}

// course playlist mcq end

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




