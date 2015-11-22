$(document).ready(function() {  
    $.get("http://instarito.azurewebsites.net/extension/thomas.yt.huang@gmail.com/favorites", function( data ) {
        console.log("success");
    });
    document.getElementById("submitbtn").addEventListener('click', function(){
        $(".loginform").remove();
        for(var i = 0; i < 3; i++){
            var id = i;
            var food_item= 'button';
            $('#main').append("<button class='ui-btn' id='" + id + "' >" + food_item + i + "</button>");
            var newlistener = document.getElementById(""+ id +"").addEventListener('click', function(){
                get_quote();
                minutes = 10;
                var opt = {
                  type: "basic",
                  title: "Order Confirmation",
                  message: "Your order for " + food_item + " has been made and will arrive in " + minutes + " minutes.",
                  iconUrl: "icon.png"
                };
                chrome.notifications.create(opt, function(){});
                $("#main").append("<p>" + "Your order for " + food_item + " has been submitted</p>");
            });
        } 
    });

});


function get_quote() {
    $.ajax({
        type: 'POST',
        crossDomain: true,
        url: 'https://api.postmates.com/v1/customers/cus_K_2kliqDxo-EI-/delivery_quotes',
        headers: {
            "Authorization": "Basic " + btoa("e8c71ef3-a56c-40ce-be76-71113b198919:")
        },
        data: {
            "api-key": "e8c71ef3-a56c-40ce-be76-71113b198919",
            "username": "e8c71ef3-a56c-40ce-be76-71113b198919",
            "password": "",
            "Content-Type": "application/json",
            "dropoff_address": "20 McAllister St, San Francisco, CA 94102",
            "pickup_address": "101 Market St, San Francisco, CA 94105"
        },
        dataType: 'json',
        beforeSend: function( xhr ) {
            // xhr.withCredentials = true;
            // xhr.setRequestHeader("Authorization", "Basic " + btoa("03d2edd7-448b-4326-9ba6-7f465a683cae:"));
            xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        },
        jsonpCallback :  'callback', 
        success:function(data) {
            console.log(data);
        },
        error:function(data) {
            console.log("error");
        }
    });
}



