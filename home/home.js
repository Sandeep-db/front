
function onLoad() {
    var user_name = localStorage.getItem("username")
    if (user_name) {
        var userName = document.querySelector(".username")
        userName.innerText = "Welcome " + user_name
        document.querySelector(".login").style.visibility = "hidden"
        document.querySelector(".logout").style.visibility = "visible"
    } else {
        document.querySelector(".login").style.visibility = "visible"
        document.querySelector(".logout").style.visibility = "hidden"
    }
}

function logIn() {
    location.href = "../login/login.html"
}

function logOut() {
    localStorage.clear()
    location.href = "../login/login.html"
}

window.onload = onLoad
window.onblur = onLoad
