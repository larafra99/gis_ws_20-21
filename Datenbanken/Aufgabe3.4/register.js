"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let regForm = document.getElementById("regform");
    let regButton = document.getElementById("register");
    regButton.addEventListener("click", register);
    async function register(_event) {
        let formData = new FormData(regForm);
        let query = new URLSearchParams(formData);
        // http:://herokuapp/register.html?user=...&
        let url = "https://gisws2021.herokuapp.com/register.html";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(response);
        console.log(responseText);
        let registerText = document.createElement("p");
        document.getElementById("registerAnswer").appendChild(registerText);
        registerText.innerHTML = responseText;
        //Fehler interface bauen
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=register.js.map