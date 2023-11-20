console.log("options.js loaded");

document.getElementsByName("save")[0].addEventListener("click", function (e) {

    e.preventDefault();

    var username = document.getElementsByName("uid")[0].value;
    var password = document.getElementsByName("pw")[0].value;


    chrome.storage.sync.set({
        "username": username,
        "password": password
    }
        ,
        function () {
            console.log("username and password saved");
        }
    );

    window.close();

})


window.onload = function () {
    chrome.storage.sync.get(["username", "password"], function (items) {
        if (!chrome.runtime.error) {
            document.getElementsByName("uid")[0].value = items.username;
            document.getElementsByName("pw")[0].value = items.password;
        }
    });
}
