"use strict";
var Endabgabe;
(function (Endabgabe) {
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
        //console.log(response);
        //console.log(responseText);
        let registerText = document.createElement("p");
        document.getElementById("registerAnswer").appendChild(registerText);
        registerText.innerHTML = responseText;
        //Fehler interface bauen
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=registrieren.js.map