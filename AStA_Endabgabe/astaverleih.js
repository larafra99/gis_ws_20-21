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
        let tableheader4 = document.createElement("th");
        tableheader1.innerHTML = "Bild";
        tableheader2.innerHTML = "Name";
        tableheader3.innerHTML = "Status";
        tableheader4.innerHTML = "Nutzer";
        document.getElementById("showData").appendChild(tabl);
        tabl.appendChild(tableheader1);
        tabl.appendChild(tableheader2);
        tabl.appendChild(tableheader3);
        tabl.appendChild(tableheader4);
        for (let i = 0; i < Object.keys(responseTextJson).length; i++) {
            let tablerow = document.createElement("tr");
            let tableelement1 = document.createElement("td");
            let tableelement2 = document.createElement("td");
            let tableelement3 = document.createElement("td");
            let tableelement4 = document.createElement("td");
            let imag = document.createElement("img");
            imag.src = "picture/" + responseTextJson[i].url;
            tableelement2.innerHTML = responseTextJson[i].name;
            //tableelement4.innerHTML = responseTextJson[i].reserviert; 
            //console.log(responseTextJson[1].status);
            console.log(sessionStorage.getItem("userId"));
            //console.log("respone" + responseTextJson[i].reserviert );
            if (responseTextJson[i].status == "reserviert") {
                let button = document.createElement("button");
                button.addEventListener("click", ausgeliehen);
                button.id = responseTextJson[i]._id;
                //console.log(responseTextJson[i]._id);
                tableelement3.appendChild(button);
                button.innerHTML = "verleihen";
                let nutzer = await gettingUser(responseTextJson[i].reserviert);
                tableelement4.innerHTML = nutzer;
            }
            else if (responseTextJson[i].status == "ausgeliehen") {
                let button = document.createElement("button");
                button.addEventListener("click", frei);
                button.id = responseTextJson[i]._id;
                //console.log(responseTextJson[i]._id);
                tableelement3.appendChild(button);
                button.innerHTML = "frei geben";
                let nutzer = await gettingUser(responseTextJson[i].reserviert);
                tableelement4.innerHTML = nutzer;
            }
            else {
                tableelement3.innerHTML = responseTextJson[i].status;
            }
            tablerow.appendChild(tableelement1);
            tablerow.appendChild(tableelement2);
            tablerow.appendChild(tableelement3);
            tablerow.appendChild(tableelement4);
            tableelement1.appendChild(imag);
            tabl.appendChild(tablerow);
        }
    }
    async function gettingUser(user) {
        let url = "https://gisws2021.herokuapp.com/showUser.html";
        if (user != "null" || null) {
            let userid = user.substr(8, user.length - 10);
            console.log(userid);
            url = url + "?" + "userID=" + userid;
            console.log(url);
            let response = await fetch(url);
            let responseText = await response.text();
            return responseText;
        }
        else {
            return "null";
        }
    }
    async function ausgeliehen(_event) {
        let url = "https://gisws2021.herokuapp.com/astaverleihausleihen.html";
        let selection = _event.target.id;
        console.log("Button" + selection);
        url = url + "?" + "buttonID=" + selection;
        console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        //console.log(response);
        console.log(responseText);
        window.location.replace("astaverleih.html");
    }
    async function frei(_event) {
        let url = "https://gisws2021.herokuapp.com/astaverleih.html";
        let selection = _event.target.id;
        console.log("Button" + selection);
        url = url + "?" + "buttonID=" + selection;
        console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        //console.log(response);
        console.log(responseText);
        window.location.replace("astaverleih.html");
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=astaverleih.js.map