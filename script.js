// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

// lines below are for testing time of day
// var hour = 17;
// var todayAMPM = 'PM';

var hour = today.format('H');
console.log(hour);
// console.log($('div'));

var plannerHours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
var compareHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (var i = 0; i <plannerHours.length; i++){
  // console.log(plannerHours[i]);
  // console.log($(`div[id='hour-${plannerHours[i]}']`));
  if(compareHours[i] == hour){
    var prev = i - 1;
    $(`div[id='hour-${plannerHours[i]}']`).removeClass("future").addClass("present");
    for(var j = 0; j < i; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("past");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("future").addClass("past");
    }
    for(var k = i+1; k < plannerHours.length; k++){
      $(`div[id='hour-${plannerHours[k]}']`).removeClass("present").addClass("future");
      $(`div[id='hour-${plannerHours[k]}']`).removeClass("past").addClass("future");
    }
  }
  else if(0 <= hour < 9){
    for(var j = 0; j < plannerHours.length; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("future");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("past").addClass("future");
    }
  }
  else{
    for(var j = 0; j < plannerHours.length; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("past");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("future").addClass("past");
    }
  }
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
