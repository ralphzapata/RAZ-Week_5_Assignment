

$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
     
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $("#hour-0800 .description").val(localStorage.getItem("hour-0800"));
    $("#hour-0830 .description").val(localStorage.getItem("hour-0830"));
    $("#hour-0900 .description").val(localStorage.getItem("hour-0900"));
    $("#hour-0930 .description").val(localStorage.getItem("hour-0930"));
    $("#hour-1000 .description").val(localStorage.getItem("hour-1000"));
    $("#hour-1030 .description").val(localStorage.getItem("hour-1030"));
    $("#hour-1100 .description").val(localStorage.getItem("hour-1100"));
    $("#hour-1130 .description").val(localStorage.getItem("hour-1130"));
    $("#hour-1200 .description").val(localStorage.getItem("hour-1200"));
    $("#hour-1230 .description").val(localStorage.getItem("hour-1230"));
    $("#hour-1300 .description").val(localStorage.getItem("hour-1300"));
    $("#hour-1330 .description").val(localStorage.getItem("hour-1330"));
    $("#hour-1400 .description").val(localStorage.getItem("hour-1400"));
    $("#hour-1430 .description").val(localStorage.getItem("hour-1430"));
    $("#hour-1500 .description").val(localStorage.getItem("hour-1500"));
    $("#hour-1530 .description").val(localStorage.getItem("hour-1530"));
    $("#hour-1600 .description").val(localStorage.getItem("hour-1600"));
    $("#hour-1630 .description").val(localStorage.getItem("hour-1630"));
    $("#hour-1700 .description").val(localStorage.getItem("hour-1700"));
  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentTime").text(moment().format("h:mm:ss a"));
  });