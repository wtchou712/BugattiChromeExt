$(document).ready(function() {
    chrome.browserAction.onClicked.addListener(function (tab) {
        alert("hey");
    });

    chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
        if (tab.url.indexOf("https://www.google.co.in/") != -1) { // Inspect whether the place where user clicked matches with our list of URL
            chrome.tabs.executeScript(tab.id, {
                "file": "contentscript.js"
            }, function () { // Execute your code
                console.log("Script Executed .. "); // Notification on Completion
            });
        }
    });
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

    
});


