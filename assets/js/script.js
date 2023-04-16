// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  
  var today = dayjs().format('dddd, MMMM D');
  $("#currentDay").text(today);
  
  var militaryTime = dayjs().format('H');
  // var militaryTime = 11;
  // console.log(militaryTime);

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
  var Btn15El = document.getElementById("btn15");
  var Btn16El = document.getElementById("btn16");
  var Btn17El = document.getElementById("btn17");

  var text9El = document.getElementById('text9');
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
  });

  Btn10El.addEventListener("click", function(event){
    event.preventDefault();
    var text10 = document.getElementById('text10').value;
    console.log(text10);
    localStorage.setItem("text10", JSON.stringify(text10));
  });

  Btn11El.addEventListener("click", function(event){
    event.preventDefault();
    var text11 = document.getElementById('text11').value;
    console.log(text11);
    localStorage.setItem("text11", JSON.stringify(text11));
  });

  Btn12El.addEventListener("click", function(event){
    event.preventDefault();
    var text12 = document.getElementById('text12').value;
    console.log(text12);
    localStorage.setItem("text12", JSON.stringify(text12));
  });

  Btn13El.addEventListener("click", function(event){
    event.preventDefault();
    var text13 = document.getElementById('text13').value;
    console.log(text13);
    localStorage.setItem("text13", JSON.stringify(text13));
  });

  Btn14El.addEventListener("click", function(event){
    event.preventDefault();
    var text14 = document.getElementById('text14').value;
    console.log(text14);
    localStorage.setItem("text14", JSON.stringify(text14));
  });


  Btn15El.addEventListener("click", function(event){
    event.preventDefault();
    var text15 = document.getElementById('text15').value;
    console.log(text15);
    localStorage.setItem("text15", JSON.stringify(text15));
  });

  Btn16El.addEventListener("click", function(event){
    event.preventDefault();
    var text16 = document.getElementById('text16').value;
    console.log(text16);
    localStorage.setItem("text16", JSON.stringify(text16));
  });

  Btn17El.addEventListener("click", function(event){
    event.preventDefault();
    var text17 = document.getElementById('text17').value;
    console.log(text17);
    localStorage.setItem("text17", JSON.stringify(text17));
  });

  // console.log(JSON.parse(localStorage.getItem("text9")));
  // console.log(JSON.parse(localStorage.getItem("text10")));
  // console.log(JSON.parse(localStorage.getItem("text11")));
  // console.log(JSON.parse(localStorage.getItem("text12")));
  // console.log(JSON.parse(localStorage.getItem("text13")));
  // console.log(JSON.parse(localStorage.getItem("text14")));
  // console.log(JSON.parse(localStorage.getItem("text15")));
  // console.log(JSON.parse(localStorage.getItem("text16")));
  // console.log(JSON.parse(localStorage.getItem("text17")));


  function renderLastEvent(){
    var lastText9 = JSON.parse(localStorage.getItem("text9"));
    if(lastText9 !== null){
      document.getElementById('text9').value = lastText9;
    } else {
      return;
    }

    var lastText10 = JSON.parse(localStorage.getItem("text10"));
    if(lastText10 !== null){
      document.getElementById('text10').value = lastText10;
    } else {
      return;
    }

    var lastText11 = JSON.parse(localStorage.getItem("text11"));
    if(lastText11 !== null){
      document.getElementById('text11').value = lastText11;
    } else {
      return;
    }

    var lastText12 = JSON.parse(localStorage.getItem("text12"));
    if(lastText12 !== null){
      document.getElementById('text12').value = lastText12;
    } else {
      return;
    }

    var lastText13 = JSON.parse(localStorage.getItem("text13"));
    if(lastText13 !== null){
      document.getElementById('text13').value = lastText13;
    } else {
      return;
    }

    var lastText14 = JSON.parse(localStorage.getItem("text14"));
    if(lastText14 !== null){
      document.getElementById('text14').value = lastText14;
    } else {
      return;
    }

    var lastText15 = JSON.parse(localStorage.getItem("text15"));
    if(lastText15 !== null){
      document.getElementById('text15').value = lastText15;
    } else {
      return;
    }

    var lastText16 = JSON.parse(localStorage.getItem("text16"));
    if(lastText16 !== null){
      document.getElementById('text16').value = lastText16;
    } else {
      return;
    }

    var lastText17 = JSON.parse(localStorage.getItem("text17"));
    if(lastText17 !== null){
      document.getElementById('text17').value = lastText17;
    } else {
      return;
    }















  }







  function initial(){
    renderLastEvent();
  }
initial();

// });


