"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    //Konsolen ausgabe
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); // bekommt einen Port
    if (!port)
        port = 8100; // wenn es keinen Port gibt soll Port 8100 sein
    let server = Http.createServer(); // Erstellen eines HTTP Severs
    server.addListener("request", handleRequest); // ein Eventhandeler = Eventlistener wird eingefügt
    server.addListener("listening", handleListen); // weiterer Eventlistener wird eingefügt 
    server.listen(port); // Eventlistener hört auf port
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); // bei Antwort aufbau einer HTML
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // Ausgabe einer URL
        _response.end(); // beenden des Programms
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=bspcode.js.map