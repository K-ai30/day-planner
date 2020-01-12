$(document).ready(function(){
    loadEntry();
    // This displays a current date and time in real time using a 12 hour clock
    var currentDate = moment().format('dddd, MMMM D, YYYY - h:mm:ss a');
    $(".date").text(currentDate);
//  A date tracker is needed 
    setInterval(function() {
        var currentDate = moment().format('dddd, MMMM D, YYYY - h:mm:ss a');
        $(".date").text(currentDate);
        // This updates the time every second
    }, 1000);
    saveEntry();
})

// These are the functions created to run in the application from the start of the page loading
function saveEntry() {
    // First get the button click event
    $(".saveIcon").on("click", function(event) {
        // Get the parent, select the input that we wanted and data or text from the input
        var parent = $(this).parent()
        var child = $("input", parent)
        var taskEntry = child.val()
        // Save each data entry in localStorage using a method that was unique
        localStorage.setItem(child.attr("id"), taskEntry)
    })
}

function loadEntry() {
    // Load data from localStorage (each item will be designated by an ID - task#)
    // Select all inputs by row
    $(".row input").each(function(row){
        var idSelector = $(this).attr("id");
        // This retrieves task entered into localStorage for future reference
        var taskEntry = localStorage.getItem(idSelector) || "";
        $(this).val(taskEntry);
        // This grabs the "entry" by id/substring (i.e., tasks#)
        var hour = parseInt(idSelector.substring(5));
        // This code gives me a 24 hour clock to ensure the application keeps track of current, present, and future hours
        var currentHour = parseInt(moment().format("H"));
        // This code breaks down the css "color changes" on each field of entry for the current, present, and future time
        if (hour < currentHour) {
            $(this).parent().parent().css("background-color", "grey");
        } else if (hour == currentHour) {
            $(this).parent().parent().css("background-color", "red");
        } else {
            $(this).parent().parent().css("background-color", "green");
        }
        // These console.logs helped determine that critical aspects of the application work correctly
        console.log(moment().format('H'));
        console.log(hour);
        console.log("******");
    })
}

// moment().format("h");
// // parseInt(moment().format("h"));
// // currentHour

// // Look at .each()
// $(".row").attr("data-hour");
// parseInt($("#tasks9").attr("data-hour"));

// console.log("jquery each loop")
// var currentHour = parseInt(moment().format("h"))
// $("#tasks9").each(function() {
//     console.log("help!")
//     console.log($(this).attr("data-hour"));
//     var dataHour = $(this).attr("data-hour");
//     var dataHourAsNumber = parseInt(dataHour);
// });