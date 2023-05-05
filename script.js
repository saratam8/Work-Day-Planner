// Using day.js to get current day, date, and time
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D h:m A'));

var hour = today.format('H');
console.log(hour);

// Array of hours on planner
var plannerHours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
// 24 hour format of the planner hours
var compareHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (var i = 0; i <plannerHours.length; i++){
  // If the current hour is on the planner, change class to present
  if(compareHours[i] == hour){
    var prev = i - 1;
    $(`div[id='hour-${plannerHours[i]}']`).removeClass("future").addClass("present");
    // The following two for loops will set the timeblocks before current hour to past and timeblocks after current hour to future
    for(var j = 0; j < i; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("past");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("future").addClass("past");
    }
    for(var k = i+1; k < plannerHours.length; k++){
      $(`div[id='hour-${plannerHours[k]}']`).removeClass("present").addClass("future");
      $(`div[id='hour-${plannerHours[k]}']`).removeClass("past").addClass("future");
    }
  }
  // This else if statement checks if the current hour is before work hours. If it is, then all the timeblocks are set to future
  else if (0 <= hour && hour < 9){
    for(var j = 0; j < plannerHours.length; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("future");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("past").addClass("future");
    }
  }
  // This else if statement checks if the current hour is after work hours. If it is, then all the timeblocks are set to past
  else if (18 < hour && hour < 24){
    for(var j = 0; j < plannerHours.length; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("past");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("future").addClass("past");
    }
  }
  // If text is present in the timeblock, it will be assigned to localstorage with the key in format of the timeblock id. 
  var key = "hour-" + plannerHours[i];
  var task = localStorage.getItem(key);
  if(task != null){
    $(`div[id='hour-${plannerHours[i]}']`).children('textarea').text(task);
  }
}

// Event listener for the save button of each timeblock
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // this references the object listening for the event. So in this case, this refers to the save button
  // console.log($(this).parent().attr('id'));
  // console.log($(this).siblings('textarea').val());

  // This variable will contain the id of the timeblock containing the save button that is clicked on
  var taskKey = $(this).parent().attr('id');
  // This variable will contain the text that the user input into the timeblock
  var taskContent = $(this).siblings('textarea').val();

  // Setting each timeblock's text to their corresponding key named after the timeblock's id
  localStorage.setItem(taskKey, taskContent);
});