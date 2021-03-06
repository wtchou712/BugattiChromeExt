$(document).ready(function() {  
    var food_favorites;
    var email="thomas.yt.huang@gmail.com";
    $.get("http://instarito.azurewebsites.net/extension/thomas.yt.huang@gmail.com/favorites", function( data ) {
        food_favorites = data;
    });
    document.getElementById("submitbtn").addEventListener('click', function(){
        $(".loginform").remove();
        for(var i = 0; i < food_favorites.length; i++){
            var id  = i;
            var food_item = food_favorites[i].nickname;
            $('#main').append("<button class='ui-btn' id='" + id + "' >" + food_item + "</button>");
            addEvListener(id, food_item, email);
        } 
    });
});


function addEvListener(id, food_item, email){
    var newlistener = document.getElementById(""+ id +"").addEventListener('click', function(){
        minutes = request_delivery(email, food_item);
        $("#main").append("<p>" + "Your order for " + food_item + " has been submitted</p>");
    });
}

function calculateMinutes(date) {
    var hours = parseInt(date.substring(11,13));
    var minutes = parseInt(date.substring(14,16));
    var finalMinutes = (hours * 60) + minutes;
    return finalMinutes;
}

function request_delivery(email, food_item) {
    var minutesRemaining;
    $.ajax({
        type: 'POST',
        crossDomain: true,
        url: 'http://instarito.azurewebsites.net/order/' + email + '/' + food_item,
        headers: {
            "Authorization": "Basic " + btoa("e8c71ef3-a56c-40ce-be76-71113b198919:")
        },
        data: {
            "email": email,
            "nickname": food_item,
            "Content-Type": "application/json",
        },
        dataType: 'json',
        beforeSend: function( xhr ) {
            xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        },
        jsonpCallback :  'callback', 
        success: function(data) {
            console.log("post data", data);
            var minutesRemaining;
            if(data.dropoff_eta == null){
                minutesRemaining = calculateMinutes(data.dropoff_deadline) - calculateMinutes(data.created);
            }
            else{
                minutesRemaining = calculateMinutes(data.dropoff_eta) - calculateMinutes(data.created);
            }
            var opt = {
              type: "basic",
              title: "Order Confirmation",
              message: "Your order for " + food_item + " has been made and will arrive in " + minutesRemaining + " minutes.",
              iconUrl: "icon.png"
            };
            chrome.notifications.create(opt, function(){});
        },
        error:function(data) {
            console.log("error");
        }
    });
}



