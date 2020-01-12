$(document).ready(function(){
    loadEntry();
    var currentDate = moment().format('dddd, MMMM D, YYYY - h:mm:ss a');
    $(".date").text(currentDate);
//  A date tracker is needed 
    setInterval(function() {
        var currentDate = moment().format('dddd, MMMM D, YYYY - h:mm:ss a');
        $(".date").text(currentDate);
    }, 1000);
    saveEntry();
})

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
    
    // data-hour for input and change class selector
    
    function saveEntry() {
        // First get the button click event
        $(".saveIcon").on("click", function(event) {
            // Get the parent, select the input that we wanted and data or text from the input
            var parent = $(this).parent()
            var child = $("input", parent)
            var taskEntry = child.val()
            // Save each data in localStorage using a method that was unique
            localStorage.setItem(child.attr("id"), taskEntry)
        })
    }
    
    function loadEntry() {
        // Load data from localStorage (each item will be designated by an ID - task#)
        // Select all inputs by row
        $(".row input").each(function(row){
            var idSelector = $(this).attr("id");
            var taskEntry = localStorage.getItem(idSelector) || "";
            $(this).val(taskEntry);
            var hour = parseInt(idSelector.substring(5));
            var currentHour = parseInt(moment().format("H"))
            if (hour < currentHour) {
                $(this).parent().parent().css("background-color", "grey");
            } else if (hour == currentHour) {
                $(this).parent().parent().css("background-color", "red");
            } else {
                $(this).parent().parent().css("background-color", "green");
            }
            console.log(moment().format('H'));
            console.log(hour);
            console.log("******");
        })
}

// To clear out localStorage, possibly
// function clearSchedule() {
//     localStorage.clear();
// }
