console.log("content.js loaded");



//after page load 
window.onload = function () {
    chrome.storage.sync.get(["username", "password"], function (items) {
        if (!chrome.runtime.error) {
            if (items.username == "installed" && items.password == "installed") {
                return;
            }

            //check for login error
            if (checkforLoginError()) {

                return;
            }

            document.getElementsByName("username")[0].value = items.username;
            document.getElementsByName("password")[0].value = items.password;
            document.getElementById("loginbtn").click();

        }
    });
}

function checkforLoginError() {
    if (document.getElementsByClassName("alert alert-danger").length > 0) {
        return true;
    }
    return false;
}