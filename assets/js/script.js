let timeDisplayEl = $('#currentDay');
let buttonEl = $('button[type="button"]');
let formEl = $('.form-control')


// TIME

let DateTime = luxon.DateTime;

// Current Date and Time at the Top of the Page: 
let now = DateTime.now();

timeDisplayEl.text(now.toFormat("EEEE','  LLLL L',' t"));


// Change colors of inputs using Luxon
let currentTime = now.toFormat("H");
let startHour = 9


$( ".form-control" ).each(function( index ) {

    if((index + startHour) == (currentTime)) {
        $(this).addClass('present')
    } else if((index + startHour) < (currentTime)) {
        $(this).addClass('past')
    } else {
        $(this).addClass('future')
    }
});



//Buttons
// make the buttons save to Local Storage

function handleButton(event) {
    event.preventDefault();

    console.log(event.target);

    localStorage.setItem("userNotes", $(".form-control").val());
    
    let storedItem = localStorage.getItem("userNotes")

    let btnClicked = $(event.target);
    //btnClicked.
};

  //Listener

 buttonEl.on('click', handleButton);