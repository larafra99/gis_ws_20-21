"use strict";
function getRec() {
    let canvas = document.getElementById("MyFirstCanvas");
    let context = canvas.getContext("2d");
    class Rec {
        constructor() {
            this.a = (Math.random() * 300) + 50;
            this.b = (Math.random() * 300) + 50;
            this.breite = (Math.random() * 100) + 50;
            this.hoehe = (Math.random() * 100) + 50;
            this.rechteck = [];
        }
        createRec() {
            this.rechteck.push([this.a, this.b, this.hoehe, this.breite]);
        }
        drawRec() {
            this.rechteck.push([this.a, this.b, this.hoehe, this.breite]);
            for (let i = 0; i < this.rechteck.length; i++) {
                context.beginPath();
                context.strokeRect(this.a, this.b, this.breite, this.hoehe);
                context.stroke();
                context.closePath();
            }
        }
    }
    let d = new Rec;
    d.createRec();
    d.drawRec();
}
getRec();
//# sourceMappingURL=aufgabe3b.js.map