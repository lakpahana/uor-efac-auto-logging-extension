console.log("background.js loaded");

//oninstalled
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        "username": "installed",
        "password": "installed"
    }
        ,
        function () {
            console.log("username and password saved");
        }
    );

});