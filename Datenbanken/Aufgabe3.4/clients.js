"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let clientButton = document.getElementById("clients");
    clientButton.addEventListener("click", showClient);
    async function showClient(_event) {
        let url = "https://gisws2021.herokuapp.com/clients.html";
        let response = await fetch(url);
        console.log(response);
        console.group(url);
        let allClients = document.createElement("p");
        document.getElementById("showclients").appendChild(allClients);
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=clients.js.map