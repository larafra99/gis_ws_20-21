"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let form = document.getElementById("form");
    let button = document.getElementById("login");
    button.addEventListener("click", login);
    let url = "https://gisws2021.herokuapp.com/";
    async function login(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = document.createElement("p");
        //Fehler interface bauen
        if (response.status != 200) { // 200 = status ok
            responseText.innerHTML = " Ein Fehler ist aufgetreten, bitte füllen sie alle Felder aus";
        }
        else {
            console.log(response.text());
        }
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=login.js.map