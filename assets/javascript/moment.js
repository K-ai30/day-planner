// A date tracker is needed 
$(document).ready(function(){
    var date = new Date();
    $ (".date").click(function){
        var val = (date.getMonth ()+1) +date.getDate ()+ ","+date.getFullYear ();
        moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#printDate").text(val);
    }


    // 