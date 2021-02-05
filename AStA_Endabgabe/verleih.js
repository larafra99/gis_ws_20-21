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
            let imag = document.createElement("img");
            imag.src = "picture/" + responseTextJson[i].url;
            tableelement2.innerHTML = responseTextJson[i].name;
            //console.log(responseTextJson[1].status);
            if (responseTextJson[i].status == "frei") {
                let button = document.createElement("button");
                button.addEventListener("click", ausleihen);
                button.id = responseTextJson[i]._id;
                //console.log(responseTextJson[i]._id);
                tableelement3.appendChild(button);
                button.innerHTML = "ausleihen";
            }
            else {
                tableelement3.innerHTML = responseTextJson[i].status;
            }
            tablerow.appendChild(tableelement1);
            tablerow.appendChild(tableelement2);
            tablerow.appendChild(tableelement3);
            tableelement1.appendChild(imag);
            tabl.appendChild(tablerow);
        }
    }
    async function ausleihen(_event) {
        let url = "https://gisws2021.herokuapp.com/ausleihen.html";
        let userId = sessionStorage.getItem("userId");
        let dataId = _event.target.id;
        console.log(dataId);
        url = url + "?" + "userID=" + userId + "&dataID=" + dataId;
        console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        //console.log(response);
        console.log(responseText);
        let loginText = document.createElement("p");
        document.getElementById("response").appendChild(loginText);
        loginText.innerHTML = responseText;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=verleih.js.map