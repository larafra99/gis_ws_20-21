"use strict";
var Aufgabe211;
(function (Aufgabe211) {
    min(3, 2, 4, 7);
    console.log(isEven(-1));
    function min(...x) {
        let minnum = x[0];
        for (let i = 1; i < x.length; i++) {
            if (minnum > x[i]) {
                minnum = x[i];
            }
        }
        console.log(minnum);
        return minnum;
    }
    function isEven(y) {
        if (y < 0) {
            return false;
        }
        else if (y == 0) {
            return true;
        }
        else if (y == 1) {
            return false;
        }
        else {
            return isEven(y - 2);
        }
    }
})(Aufgabe211 || (Aufgabe211 = {}));
let s1 = { name: "Annika", lastname: "Schmidt", studiengang: "OMB", fakultät: "DM", semester: 3, matrikelnr: 35671 };
let s2 = { name: "Tristan", lastname: "Müller", studiengang: "IB", fakultät: "I", semester: 1, matrikelnr: 45672 };
let s3 = { name: "Kim", lastname: "Fischer", studiengang: "IBW", fakultät: "W", semester: 5, matrikelnr: 19877 };
let studierende = [s1, s2, s3, { name: "Erik", lastname: "Fleischer", studiengang: "MIB", fakultät: "DM", semester: 2, matrikelnr: 35984 }];
//function showInfo( m: number ): void {
//console.log(studierende.find( s => s.matrikelnr === m));
//}
//showInfo(45672);
class Hochschule {
    showInfo(m) {
        console.log(studierende.find(s => s.matrikelnr === m));
    }
}
let d = new Hochschule;
d.showInfo(19877);
//# sourceMappingURL=aufgabe1.js.map