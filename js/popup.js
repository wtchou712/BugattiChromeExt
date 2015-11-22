$(document).ready(function() {
    for(var i=0; i < 3; i++) {
        var id = i;
        var buttonName= 'button1';
        $('#main').append("<button class='food' id='" + id + "' >" + buttonName + i + "</button>");
    }

    chrome.browserAction.onClicked.addListener(function () {
        $(".food").click(function() {
            alert("id:" , id);
        });
    });


    
});
