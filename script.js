// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var today = dayjs();
// var todayAMPM = today.format('A');
// console.log(todayAMPM);
// $('#currentDay').text(today.format('dddd, MMMM D'));

// lines below are for testing time of day
var hour = 1;
var todayAMPM = 'PM';

// var hour = today.format('h');
console.log(hour);
console.log($('div'));

var plannerHours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
var amPm = ['AM', 'AM', 'AM', 'PM', 'PM', 'PM', 'PM', 'PM', 'PM', 'PM',];

for (var i = 0; i <plannerHours.length; i++){
  console.log(plannerHours[i]);
  console.log($(`div[id='hour-${plannerHours[i]}']`));
  if(plannerHours[i] == hour && amPm[i] == todayAMPM){
    var prev = i - 1;
    $(`div[id='hour-${plannerHours[i]}']`).removeClass("future").addClass("present");
    // $(`div[id='hour-${plannerHours[prev]}']`).removeClass("present").addClass("past");
    console.log("variable i is " + i);
    for(var j = 0; j < i; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("past");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("future").addClass("past");
    }
    for(var k = i+1; k < plannerHours.length; k++){
      $(`div[id='hour-${plannerHours[k]}']`).removeClass("present").addClass("future");
      $(`div[id='hour-${plannerHours[k]}']`).removeClass("past").addClass("future");
    }
    // console.log($(`div[id='hour-${plannerHours[i]}']`));
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
  //
  // TODO: Add code to display the current date in the header of the page.
});
