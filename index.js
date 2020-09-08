function businessHours(dayNumber, hourNumber) {
    var isBusinessHours = hourNumber >= 9 && hourNumber <= 18;
    var isWorkDay = dayNumber < 5;
return isBusinessHours && isWorkDay;
}
businessHours(4,6);


function getDayNumber(janFirstDayNumber, yearDayNumber) {
    var dayNumber = (janFirstDayNumber + yearDayNumber) % 7;

        return getdayNumber;
}

function isBusinessHoursOnDay(yearDayNumber, hourNumber, janFirstDayNumber = 0) {
    var dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber);
    var isBusinessHours = businessHours(dayNumber, hourNumber);

    return isBusinessHours;
}