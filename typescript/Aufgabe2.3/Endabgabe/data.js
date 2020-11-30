"use strict";
var aufgabe232;
(function (aufgabe232) {
    aufgabe232.koepfe = ["head1aa", "head2", "head3"];
    aufgabe232.koerper = ["body1", "body2", "body3"];
    aufgabe232.beine = ["leg1", "leg2", "leg3"];
    function dataJSonString() {
        let parts = { heads: aufgabe232.koepfe, bodies: aufgabe232.koerper, legs: aufgabe232.beine };
        return JSON.stringify(parts);
    }
})(aufgabe232 || (aufgabe232 = {}));
//# sourceMappingURL=data.js.map