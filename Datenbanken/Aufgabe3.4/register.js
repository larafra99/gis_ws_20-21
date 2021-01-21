"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let regForm = document.getElementById("form");
    let regButton = document.getElementById("register");
    regButton.addEventListener("click", register);
    let url = "https://gisws2021.herokuapp.com/";
    async function register(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        console.log(response.text());
        let registerText = document.createElement("p");
        document.getElementById("register").appendChild(registerText);
        //Fehler interface bauen
        //let text: string = await response.text();
        //console.log(text);
        //let statusCode: StatusCode = Number.parseInt(text);
        //console.log(statusCode);
        //let answer: Answer = await response.json();
        //let status: number = <number>answer.status;
        //console.log(status);
        //if (response.status != 200) { // 200 = status ok
        //  registerText.innerText = " Ein Fehler ist aufgetreten";
        //}
        //else {
        //console.log(response.text());
        //}
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=register.js.map