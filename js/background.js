// chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
//         chrome.tabs.executeScript(tab.id, {
//             "file": "contentscript.js"
//         }, function () { // Execute your code
//             console.log("Script Executed .. "); // Notification on Completion
//         });
// });



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



    // function get_quote() {
//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//         // $('#main').append("<p>" + xhttp.responseText + "</p>");
//         console.log(xhttp.responseText);
//     }
//   };

//   xhttp.open("POST", "https://api.postmates.com/v1/customers/cus_K_2kliqDxo-EI-/delivery_quotes", true);
//   xhttp.setRequestHeader("dropoff_address", "20 McAllister St, San Francisco, CA 94102" );
//   xhttp.setRequestHeader("pickup_address", "101 Market St, San Francisco, CA 94105");
//   xhttp.setRequestHeader('Content-Type', 'application/json');
//   xhttp.setRequestHeader('Api-Key', 'cfbd0d3c-7f9c-4c0e-a9e0-f5e78310d5bb');

//   xhttp.send();
// }

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
