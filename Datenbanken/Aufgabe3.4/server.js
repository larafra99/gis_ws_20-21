"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let collection;
    //Port erstellen
    let port = Number(process.env.PORT);
    if (port == undefined) {
        port = 8100;
    }
    //let dataBaseUrl: string = "mongodb://localhost: 27017";
    let dataBaseUrl = "mongodb+srv://Reader:Database123@gisws20-21.a07b1mongodb.net/Endabgabe?retryWrites=true&w=majority";
    console.log("Starting server");
    //Aufruf der Funktionen
    startServer(port);
    connectToDatabase(dataBaseUrl);
    //Server erstellen
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
        collection = mongoClient.db("Endabgabe").collection("Users");
        console.log("Database connection sucessfull", collection != undefined);
    }
    function handleListen() {
        console.log(" I am listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            console.log(q.pathname);
            for (let key in q.query) {
                _response.write(key + ":" + q.query[key] + "<br/>");
            }
            if (q.pathname == "/login.html") {
                console.log("einloggen");
                let parameter = q.query;
                console.log(parameter);
                let result = await einloggen(parameter.email, parameter.password);
                _response.write(result);
            }
            else if (q.pathname == "/register.html") {
                console.log("registieren");
                //let users: User = {"benutzername": benutzername, "email": email , "passwort": passwort};
                //registerien(users);
            }
            else if (q.pathname == "/clients.html") {
                console.log("benutzer");
                showClients();
            }
        }
        _response.end();
    }
    function registerien(_client) {
    }
    function showClients() {
    }
    async function einloggen(_email, _password) {
        let daten = await collection.findOne({ email: _email, password: _password });
        if (daten) {
            return true;
        }
        else {
            return true;
        }
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map