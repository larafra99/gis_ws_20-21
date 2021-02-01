"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let clientButton = document.getElementById("clients");
    clientButton.addEventListener("click", showClient);
    async function showClient(_event) {
        let url = "https://gisws2021.herokuapp.com/clients.html";
        let response = await fetch(url);
        let responseText = await response.text();
        //let responseTextJson: JSON = JSON.parse(responseText);
        console.log(response);
        console.log(responseText);
        console.log(url);
        let allClients = document.createElement("p");
        document.getElementById("showclients").appendChild(allClients);
        allClients.innerHTML = responseText;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=clients.js.map