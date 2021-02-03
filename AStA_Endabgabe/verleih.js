"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    showData();
    async function showData() {
        let url = "https://gisws2021.herokuapp.com/verleih.html";
        let response = await fetch(url);
        let responseText = await response.text();
        //let responseTextJson: JSON = JSON.parse(responseText);
        console.log(response);
        //console.log(responseText);
        //console.log(url);
        for (let i = 0; i < responseText.length; i++) {
            console.log(i);
        }
        //for ( let parts in responseText) {
    }
    //console.log(responseText);
    //let allClients: HTMLElement = document.createElement("p");
    //document.getElementById("showData").appendChild(allClients);
    //allClients.innerHTML = responseText;
    //let names: string[];
    //if (document.getElementById("name") != null) {
    //names.push();
    //console.log(names);
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=verleih.js.map