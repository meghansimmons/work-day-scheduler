// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var today = dayjs().format('dddd, MMMM D');
  $("#currentDay").text(today);
  
  // var militaryTime = dayjs().format('H');
  var militaryTime = 11;
  console.log(militaryTime);

  var hour9 = $('#hour-9').data('hour');
  var hour10 = $('#hour-10').data('hour');
  var hour11 = $('#hour-11').data('hour');
  var hour12 = $('#hour-12').data('hour');
  var hour13 = $('#hour-13').data('hour');
  var hour14 = $('#hour-14').data('hour');
  var hour15 = $('#hour-15').data('hour');
  var hour16 = $('#hour-16').data('hour');
  var hour17 = $('#hour-17').data('hour');

  var hourArray = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
  var idArray = ["#hour-9","#hour-10", "#hour-11", "#hour-12","#hour-13","#hour-14","#hour-15","#hour-16","#hour-17"];


  for(i=0; i<hourArray.length; i++){

    if (hourArray[i] == militaryTime) {
      $(idArray[i]).addClass("present");

    } else if (hourArray[i] < militaryTime) {
      $(idArray[i]).addClass("past");

    } else {
      $(idArray[i]).addClass("future");
    }
  }


  var Btn9El = document.getElementById('btn9');
  var Btn10El = document.getElementById("btn10");
  var Btn11El = document.getElementById("btn11");
  var Btn12El = document.getElementById("btn12");
  var Btn13El = document.getElementById("btn13");
  var Btn14El = document.getElementById("btn14");
  var Btn15El = document.getElementById("#btn15");
  var Btn16El = document.getElementById("#btn16");
  var Btn17El = document.getElementById("#btn17");

  
  var text10El = document.getElementById('text10');
  var text11El = document.getElementById('text11');
  var text12El = document.getElementById('text12');
  var text13El = document.getElementById('text13');
  var text14El = document.getElementById('text14');
  var text15El = document.getElementById('text15');
  var text16El = document.getElementById('text16');
  var text17El = document.getElementById('text17');







  Btn9El.addEventListener("click", function(event){
    event.preventDefault();
    var text9 = document.getElementById('text9').value;
    console.log(text9);
    localStorage.setItem("text9", JSON.stringify(text9));
  })

  console.log(JSON.parse(localStorage.getItem("text9")));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?




});


