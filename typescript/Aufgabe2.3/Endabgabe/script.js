"use strict";
var aufgabe232;
(function (aufgabe232) {
    class Human {
        setBody(b) {
            this.body = b;
        }
        setHead(h) {
            this.head = h;
        }
        setLeg(l) {
            this.leg = l;
        }
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
    let f = new Human;
    class Humans {
        constructor() {
            this.heads = aufgabe232.koepfe;
            this.bodies = aufgabe232.koerper;
            this.legs = aufgabe232.beine;
        }
        getallhead() {
            return this.heads;
        }
        getallbodies() {
            return this.bodies;
        }
        getalllegs() {
            return this.legs;
        }
        clickFunction(evt) {
            let selection = evt.target.innerHTML;
            let bodyPart = evt.target.id;
            console.log(selection, bodyPart);
            //localStorage.setItem(Selection);
            if (document.getElementById("head") != null) {
                f.setHead(selection);
                //localStorage.setItem("head", Selection);
                window.location.replace("body.html");
            }
            else if (document.getElementById("body") != null) {
                f.setBody(selection);
                window.location.replace("legs.html");
            }
            else if (document.getElementById("leg") != null) {
                f.setLeg(selection);
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
        }
    }
    aufgabe232.Humans = Humans;
    let d = new Humans;
    d.makelist();
    console.log(f.getLeg);
})(aufgabe232 || (aufgabe232 = {}));
//# sourceMappingURL=script.js.map