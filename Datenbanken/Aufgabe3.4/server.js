"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let user;
    let port = Number(process.env.PORT);
    if (port == undefined) {
        port = 8100;
    }
    let dataBaseUrl = "mongodb://localhost: 27017";
    console.log("Starting server");
    startServer(port);
    connectToDatabase(dataBaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        user = mongoClient.db("Database").collection("Users");
        console.log("Database connection sucessfull", user != undefined);
    }
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
            let uni = JSON.stringify(q.query);
            _response.write(uni);
            //unidata(uni);
        }
        _response.end();
    }
    function unidata(_uni) {
        //unidata.insert(_uni);
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map