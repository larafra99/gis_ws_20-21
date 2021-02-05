"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    showData();
    async function showData() {
        let url = "https://gisws2021.herokuapp.com/verleih.html";
        let response = await fetch(url);
        let responseText = await response.text();
        let responseTextJson = JSON.parse(responseText);
        //console.log(response);
        console.log(responseTextJson);
        console.log(Object.keys(responseTextJson).length);
        console.log(responseTextJson[1].name);
        let tabl = document.createElement("table");
        let tableheader1 = document.createElement("th");
        let tableheader2 = document.createElement("th");
        let tableheader3 = document.createElement("th");
        tableheader1.innerHTML = "Bild";
        tableheader2.innerHTML = "Name";
        tableheader3.innerHTML = "Status";
        document.getElementById("showData").appendChild(tabl);
        tabl.appendChild(tableheader1);
        tabl.appendChild(tableheader2);
        tabl.appendChild(tableheader3);
        for (let i = 0; i < Object.keys(responseTextJson).length; i++) {
            let tablerow = document.createElement("tr");
            let tableelement1 = document.createElement("td");
            let tableelement2 = document.createElement("td");
            let tableelement3 = document.createElement("td");
            tableelement1.innerHTML = responseTextJson[i].url;
            tableelement2.innerHTML = responseTextJson[i].name;
            tableelement3.innerHTML = responseTextJson[i].status;
            tablerow.appendChild(tableelement1);
            tablerow.appendChild(tableelement2);
            tablerow.appendChild(tableelement3);
            tabl.appendChild(tablerow);
        }
        //console.log(responseText);
        //let allClients: HTMLElement = document.createElement("p");
        //document.getElementById("showData").appendChild(allClients);
        //allClients.innerHTML = responseText;
        //let names: string[];
        //if (document.getElementById("name") != null) {
        //names.push();
        //console.log(names);
        //} 
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=verleih.js.map