console.log("content.js loaded");




//after page load 
window.onload = function () {
    chrome.storage.sync.get(["username", "password"], function (items) {
        if (!chrome.runtime.error) {
            console.log(items.username);
            console.log(items.password);
            document.getElementsByName("username")[0].value = items.username;
            document.getElementsByName("password")[0].value = items.password;
            document.getElementById("loginbtn").click();
        }
    });
}

