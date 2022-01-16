// Add current day to the top of the screen
function todaysDate(now=moment()) {
    $('#currentDay').text(now.format('dddd, MMMM Do'));
};

todaysDate();

