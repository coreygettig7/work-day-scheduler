// Add current day to the top of the screen
function todaysDate(now=moment()) {
    $('#currentDay').text(now.format('dddd, MMMM Do'));
};

todaysDate();

// adds colors to time slots depending on past, present, and future
var checkHour = new Date(); // initiates current date and time
var currentHour = checkHour.getHours(); // returns 0-23 on a 24 hour clock

for (var i = 8; i < 18; i++) {
    if (i < currentHour) {
        document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentHour) {
        document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
        document.getElementById(i.toString()).classList.add('future');
    }
};