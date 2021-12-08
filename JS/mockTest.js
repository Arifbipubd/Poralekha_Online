function startMcq1() {
  var c = 360;
  var t;
  $(document).ready(function () {

    timedCount1();

  });
  function timedCount1() {
    if (c == 185) {
      return false;
    }

    var hours = parseInt(c / 3600) % 24;
    var minutes = parseInt(c / 60) % 60;
    var seconds = c % 60;
    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) ;
    // + "Min"  + "Time Left"
    $('#timer1').html(result);
    
    if (c < 0) {
      // $(".quiz-contentBtn").attr('disabled', 'disabled');
      quizTimeOut()
      $(".quiz-contentBtn").attr('disabled', 'disabled');
      return false;
    }


    c = c - 1;
    t = setTimeout(function () {
      timedCount1()
    }, 1000);
  }
  

}
function quizTimeOut(){
  alert("Time Out\n Submit the quiz");
  document.getElementById("contentBtn").click();
  // location.href='mockTestViewRslt.html';
  
}
function quizSubmitBtn(){
  console.log('done');
 quizSubmit();
}
function quizSubmit(){
  alert("Press OK To Go\nNext Page");
  location.href='mockTestAcheivement.html';
}