$(document).ready(function() {
    for(var i = 0; i < 3; i++){
        var id = i;
        var food_item= 'button';
        $('#main').append("<button class='ui-btn' id='" + id + "' >" + food_item + i + "</button>");
        var newlistener = document.getElementById(""+ id +"").addEventListener('click', function(){
            // alert("asjfh");
            submitReq();
            $("#main").append("<p>" + "Your order for " + food_item + " has been submitted</p>");
        });
    }    
});

function get_quote() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("POST", "https://api.postmates.com/v1/customers/cus_abc123/delivery_quotes", true);
  xhttp.send();
}

// document.addEventListener('DOMContentLoaded', function () {
//     var buttons = document.querySelectorAll('button');
//     for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', getAjax);
//   }
// });

// var buttons = document.getElementsByClassName("ui-btn");
// for(var i = 0; i < buttons.length; i++) {
//       buttons[i].addEventListener('click', function() {
//         chrome.tabs.getSelected(null, function(tab) {
//           d = document;
//           var f = d.createElement('form');
//           f.action = 'http://gtmetrix.com/analyze.html?bm';
//           f.method = 'post';
//           var i = d.createElement('input');
//           i.type = 'hidden';
//           i.name = 'url';
//           i.value = tab.url;
//           f.appendChild(i);
//           d.body.appendChild(f);
//           f.submit();
//         });
//       }, false);
// }


    // chrome.browserAction.onClicked.addListener(function (tab) {
    //     createNotification();
    // });

    // function createNotification(){
    // var opt = {type: "basic",title: "Your Title",message: "Your message",iconUrl: "your_icon.png"}
    // chrome.notifications.create("notificationName",opt,function(){});

    // //include this line if you want to clear the notification after 5 seconds
    // setTimeout(function(){chrome.notifications.clear("notificationName",function(){});},5000);
    // }


 
    // for(var i=0; i < 3; i++) {
    //     var id = i;
    //     var buttonName= 'button';
    //     $('#main').append("<button class='ui-btn' id='" + id + "' >" + buttonName + i + "</button>");
    // }

    // $(".ui-btn").click(function() {
    //     // alert("id:" , id);
    //     notifyMe();

    // });

    // // Request permission on page load
    // document.addEventListener('DOMContentLoaded', function () {
    //   if (Notification.permission !== "granted"){
    //     Notification.requestPermission();
    //     alert("notifications granted");
    //   }
    // });

    // function notifyMe() {
    //   if (!Notification) {
    //     alert('Desktop notifications not available in your browser. Try Chromium.'); 
    //     return;
    //   }

    //   if (Notification.permission !== "granted")
    //     Notification.requestPermission();
    //   else {
    //     var notification = new Notification('Notification title', {
    //       icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
    //       body: "Hey there! You've been notified!",
    //     });

    //     notification.onclick = function () {
    //       window.open("http://stackoverflow.com/a/13328397/1269037");      
    //     };
        
    //   }

    // }

