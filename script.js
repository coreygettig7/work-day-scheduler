var tasks = []

// Add current day to the top of the screen
function todaysDate(now=moment()) {
    $('#currentDay').text(now.format('dddd, MMMM Do'));
};

todaysDate();

// adds colors to time slots depending on past, present, and future
var checkHour = new Date(); // initiates current date and time
var currentHour = checkHour.getHours(); // returns 0-23 on a 24 hour clock

// loops through hours to see if they're past, present, or future
for (var i = 8; i < 18; i++) {
    if (i < currentHour) {
        document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentHour) {
        document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
        document.getElementById(i.toString()).classList.add('future');
    }
};

// save data in row when save button is clicked
$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save the data in local storage
    localStorage.setItem(time, value);
});

// call data stored from local storage and place it in respective rows
$("#row8Am .description").val(localStorage.getItem("row8Am"));
$("#row9Am .description").val(localStorage.getItem("row9Am"));
$("#row10Am .description").val(localStorage.getItem("row10Am"));
$("#row11Am .description").val(localStorage.getItem("row11Am"));
$("#row12Pm .description").val(localStorage.getItem("row12Pm"));
$("#row1Pm .description").val(localStorage.getItem("row1Pm"));
$("#row2Pm .description").val(localStorage.getItem("row2Pm"));
$("#row3Pm .description").val(localStorage.getItem("row3Pm"));
$("#row4Pm .description").val(localStorage.getItem("row4Pm"));
$("#row5Pm .description").val(localStorage.getItem("row5Pm"));