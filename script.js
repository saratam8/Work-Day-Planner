// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

var hour = today.format('H');
console.log(hour);

var plannerHours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
var compareHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (var i = 0; i <plannerHours.length; i++){
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
  else if (0 <= hour && hour < 9){
    for(var j = 0; j < plannerHours.length; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("future");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("past").addClass("future");
    }
  }
  else if (18 < hour && hour < 24){
    for(var j = 0; j < plannerHours.length; j++){
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("present").addClass("past");
      $(`div[id='hour-${plannerHours[j]}']`).removeClass("future").addClass("past");
    }
  }
  var key = "hour-" + plannerHours[i];
  console.log("key is " + key);
  var task = localStorage.getItem(key);
  console.log(task);
  if(task != null){
    $(`div[id='hour-${plannerHours[i]}']`).children('textarea').text(task);
  }
}

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // this references the object listening for the event. So in this case, this refers to the save button
  console.log($(this).parent().attr('id'));
  console.log($(this).siblings('textarea').val());

  var taskKey = $(this).parent().attr('id');
  var taskContent = $(this).siblings('textarea').val();

  localStorage.setItem(taskKey, taskContent);
});
