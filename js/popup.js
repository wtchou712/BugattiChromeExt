$(document).ready(function() {
    console.log("JQUERY TEST");
    for(var i=0; i < 3; i++) {
        var id = i;
        var buttonName= 'button1';
        $('#main').append("<button class='food' id='" + id + "' >" + buttonName + i + "</button>");
    }
    $(".food").click(function() {
        console.log("clicked");
        alert("id:" , id);
    });


    
});