/****************************************************************
* Program: Work Day Scheduler
*
* Author: Megan Steblay
*
****************************************************************/


// VARIABLES 
let timeDisplayEl = $('#currentDay');
let buttonEl = $('button[type="button"]');
let formEl = $('.form-control')


// TIME (using Luxon)
let DateTime = luxon.DateTime;

// Current Date and Time at the top of the page: 
let now = DateTime.local();
timeDisplayEl.text(now.toFormat("EEEE','  LLLL d',' t"));

// Variables for time:
let currentTime = now.toFormat("H");
let startHour = 9

// Function for setting the schedule colors and calling the stored text:
$(".form-control").each(function (index) {
    if ((index + startHour) == (currentTime)) {
        $(this).addClass('present')
    } else if ((index + startHour) < (currentTime)) {
        $(this).addClass('past')
    } else {
        $(this).addClass('future')
    }
    // Grabbing the input from storage: 
    let name = $(this).attr('aria-label');
    let retrievedValue = JSON.parse(localStorage.getItem(name));
    $(this).val(retrievedValue);
});

// Function for saving the input to LocalStorage: 
function saveButton(event) {
    event.preventDefault();
    // Get specific button and its corresponding aria-label and input: 
    let btnClicked = $(event.target);
    let name = btnClicked.parent().parent().siblings().eq(1).attr('aria-label');
    let input = btnClicked.parent().parent().siblings().eq(1).val();
    // Store these in LocalStorage: 
    localStorage.setItem(name, JSON.stringify(input));
};


// CODE TO TEST DIFFERENT TIMES: 
// let testTime = 11; // Setting hour with 24-hour clock
// let hoursToSubtract = currentHour - testTime; 
// currentHour -= hoursToSubtract; 


// Click event listeners for buttons: 
buttonEl.on('click', saveButton);
