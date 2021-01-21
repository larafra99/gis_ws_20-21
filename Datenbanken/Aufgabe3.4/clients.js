"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let clientButton = document.getElementById("clients");
    clientButton.addEventListener("click", showClient);
    async function showClient() {
        let response = await fetch(url, client);
        let client = document.createElement("p");
        document.getElementById("showclient").appendChild(client);
        client.innerText = User.vorname;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=clients.js.map