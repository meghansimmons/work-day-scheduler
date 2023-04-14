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

  
  // var militaryTime = dayjs().format('H');
  var militaryTime = 10;
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


  var saveBtnEl = document.querySelector("#hour-9");

  saveBtnEl.addEventListener("click", function(){
    console.log("button was pushed");
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



});


