"use strict";
var Aufgabe211;
(function (Aufgabe211) {
    let a = [3, 2, 4, 7];
    min(a);
    console.log(isEven(-1));
    function min(x) {
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
//# sourceMappingURL=aufgabe1.js.map