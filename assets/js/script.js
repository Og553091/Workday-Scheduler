$(function () {
  
    //This section is responsible for storing the written values into the local storage
    $(".saveBtn").on("click", function(){
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
    })
  
    // this section is responsible for changing the 'ids' into arrays and using their numerical value, from there dayjs is used to 
    //determine the time of day and set its background color based off of 'past' present' or 'future'
    $(".time-block").each(function(){
      var currentHour = dayjs().hour();
      var hour = parseInt($(this).attr("id").split("-")[1]);
  
      if (hour < currentHour){
        $(this).addClass("past");
      }
      else if (hour === currentHour){
        $(this).addClass("present");
      }
      else {
        $(this).addClass("future");
      }
    })
    
    //this section is responsible for pulling the information from local storage and displaying it in the proper spots
    $(".time-block").each(function(){
      var timeBlockEl = $(this).attr("id");
      var savedInput = localStorage.getItem(timeBlockEl);
      if (savedInput !== null){
        $(this).children(".description").val(savedInput);
      }
    })
    
    //this just uses dayjs to display the current time, in format of 'Day of the Week", "Month Name" "Day of the Month"
    $("#currentDay").text(dayjs().format("dddd, MMMM DD"));
  });