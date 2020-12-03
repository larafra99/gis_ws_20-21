"use strict";
var aufgabe232;
(function (aufgabe232) {
    class Humans {
        clickFunction(evt) {
            let selection = evt.target.src;
            console.log(selection);
            if (document.getElementById("head") != null) {
                sessionStorage.setItem("head", selection);
                window.location.replace("body.html");
            }
            else if (document.getElementById("body") != null) {
                sessionStorage.setItem("body", selection);
                window.location.replace("legs.html");
            }
            else if (document.getElementById("leg") != null) {
                sessionStorage.setItem("leg", selection);
                window.location.replace("human.html");
            }
        }
        clickRestart() {
            window.location.replace("index.html");
        }
        clickStart() {
            window.location.replace("head.html");
        }
        async makelist() {
            let response = await fetch("data.json");
            let parts = await response.json();
            this.heads = parts.top;
            this.bodies = parts.middle;
            this.legs = parts.bottom;
            if (document.getElementById("Auswahl") != null) {
                for (var i of this.heads) {
                    let knopf = document.createElement("img");
                    knopf.src = i;
                    knopf.id = "head";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("Auswahl").appendChild(knopf);
                }
            }
            else if (document.getElementById("koerper") != null) {
                for (var l of this.bodies) {
                    let knopf = document.createElement("img");
                    knopf.src = l;
                    knopf.id = "body";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("koerper").appendChild(knopf);
                }
            }
            else if (document.getElementById("beine") != null) {
                for (var k of this.legs) {
                    let knopf = document.createElement("img");
                    knopf.src = k;
                    knopf.id = "leg";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("beine").appendChild(knopf);
                }
            }
            else if (document.getElementById("response") != null) {
                let query = new URLSearchParams(sessionStorage);
                let url = "http://gis-communication.herokuapp.com/";
                url = url + "?" + query.toString();
                console.log(url);
                let respond = await fetch(url);
                console.log(respond);
                let antwort = await respond.json();
                console.log(antwort.error);
                console.log(antwort.message);
                if (antwort.error != null) {
                    let serverAntwort = document.createElement("p");
                    serverAntwort.innerHTML = antwort.error;
                    serverAntwort.style.color = "red";
                    document.getElementById("response").appendChild(serverAntwort);
                }
                else {
                    let serverAntwort = document.createElement("p");
                    serverAntwort.innerHTML = antwort.message;
                    serverAntwort.style.color = "green";
                    document.getElementById("response").appendChild(serverAntwort);
                }
            }
            if (document.getElementById("example") != null) {
                sessionStorage.clear();
                let buttonStart = document.createElement("button");
                buttonStart.innerHTML = "start";
                document.getElementById("start").appendChild(buttonStart);
                buttonStart.addEventListener("click", this.clickStart);
            }
            else {
                let list = document.createElement("ul");
                document.getElementById("finish").appendChild(list);
                let listele1 = document.createElement("li");
                let listele2 = document.createElement("li");
                let listele3 = document.createElement("li");
                let imag1 = document.createElement("img");
                let imag2 = document.createElement("img");
                let imag3 = document.createElement("img");
                document.getElementById("restart");
                let button = document.createElement("button");
                button.innerHTML = "restart";
                document.getElementById("restart").appendChild(button);
                button.addEventListener("click", this.clickRestart);
                if (sessionStorage.getItem("head") != null) {
                    list.appendChild(listele1);
                    listele1.appendChild(imag1);
                    imag1.src = sessionStorage.getItem("head");
                }
                if (sessionStorage.getItem("body") != null) {
                    list.appendChild(listele2);
                    listele2.appendChild(imag2);
                    imag2.src = sessionStorage.getItem("body");
                }
                if (sessionStorage.getItem("leg") != null) {
                    list.appendChild(listele3);
                    listele3.appendChild(imag3);
                    imag3.src = sessionStorage.getItem("leg");
                }
            }
        }
    }
    let d = new Humans;
    d.makelist();
    //d.fetchSuccess();
})(aufgabe232 || (aufgabe232 = {}));
//# sourceMappingURL=script.js.map