"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe3_2;
(function (Aufgabe3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log(" I am listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            for (let key in q.query) {
                _response.write(key + ":" + q.query[key] + "<br/>");
            }
            let stringJSON = JSON.stringify(q.query);
            _response.write(stringJSON);
        }
        _response.end();
    }
})(Aufgabe3_2 = exports.Aufgabe3_2 || (exports.Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map