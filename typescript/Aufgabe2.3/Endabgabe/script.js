"use strict";
var aufgabe232;
(function (aufgabe232) {
    class Human {
        getBody() {
            return this.body;
        }
        getHead() {
            return this.head;
        }
        getLeg() {
            return this.leg;
        }
    }
    class Humans {
        constructor() {
            let humanparts = aufgabe232.dataJSonString();
            let parts = JSON.parse(humanparts);
            this.heads = parts.top;
            this.bodies = parts.middle;
            this.legs = parts.bottom;
        }
        clickFunction(evt) {
            let selection = evt.target.innerHTML;
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
        makelist() {
            if (document.getElementById("Auswahl") != null) {
                for (var i of this.heads) {
                    let knopf = document.createElement("button");
                    knopf.innerHTML = i;
                    knopf.id = "head";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("Auswahl").appendChild(knopf);
                }
            }
            else if (document.getElementById("koerper") != null) {
                for (var l of this.bodies) {
                    let knopf = document.createElement("button");
                    knopf.innerHTML = l;
                    knopf.id = "body";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("koerper").appendChild(knopf);
                }
            }
            else if (document.getElementById("beine") != null) {
                for (var k of this.legs) {
                    let knopf = document.createElement("button");
                    knopf.innerHTML = k;
                    knopf.id = "leg";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("beine").appendChild(knopf);
                }
            }
            if (document.getElementById("example") != null) {
                sessionStorage.clear();
            }
            else {
                let list = document.createElement("ul");
                document.getElementById("finish").appendChild(list);
                let listele1 = document.createElement("li");
                let listele2 = document.createElement("li");
                let listele3 = document.createElement("li");
                listele1.innerHTML = sessionStorage.getItem("head");
                list.appendChild(listele1);
                listele2.innerHTML = sessionStorage.getItem("body");
                list.appendChild(listele2);
                listele3.innerHTML = sessionStorage.getItem("leg");
                list.appendChild(listele3);
            }
        }
    }
    let d = new Humans;
    if (document)
        d.makelist();
})(aufgabe232 || (aufgabe232 = {}));
//# sourceMappingURL=script.js.map