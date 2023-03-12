function onLoad() {
    if (localStorage.getItem("username")) {
        location.href = "../home/home.html";
    }
}

function submit(jsonData) {
    console.log(jsonData);
    localStorage.clear();
    localStorage.setItem("username", "Sandyblaze");
    location.href = "../home/home.html";
}

document.querySelector("#submit").addEventListener("click", function () {
    var formDate = new FormData(document.forms["login-form"]);
    var jsonData = {};
    for (const [k, v] of formDate.entries()) {
        jsonData[k] = v;
    }
    submit(jsonData);
});
