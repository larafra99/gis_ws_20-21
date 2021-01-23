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
    let dataBaseUrl = "mongodb+srv://Reader:Database123@gisws20-21.a07b1.mongodb.net/Endabgabe?retryWrites=true&w=majority";
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
            for (let key in q.query) {
                _response.write(key + ":" + q.query[key] + "<br/>");
            }
            let parameter = q.query;
            if (q.pathname == "/login.html") {
                console.log("einloggen");
                let result = await einloggen(parameter.email, parameter.password);
                if (result) {
                    _response.write("Sie sind eingelogt");
                }
                else {
                    _response.write("Fehler aufgetreten Bitte überprüfen sie ihre Daten");
                }
            }
            else if (q.pathname == "/register.html") {
                console.log("registieren");
                let users = {
                    vorname: parameter.fname,
                    nachname: parameter.lname,
                    email: parameter.email,
                    passwort: parameter.password
                };
                let resultreg = await registerien(users);
                if (resultreg) {
                    _response.write("Nutzer wurde erstellt");
                }
                else {
                    _response.write("Emailadresse ist schon vergeben bitte nutzen sie Login");
                }
            }
            else if (q.pathname == "/clients.html") {
                console.log("benutzer");
                let listUser = await showClients();
                _response.write(JSON.stringify(listUser));
            }
        }
        _response.end();
    }
    async function registerien(_client) {
        let _suchmail = await collection.countDocuments({ "email": _client.email });
        if (_suchmail > 0) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            return true;
        }
    }
    async function showClients() {
        let allUser = await collection.find({}, { projection: { _íd: 0, passwort: 0 } }).toArray();
        return allUser;
    }
    async function einloggen(_email, _password) {
        let daten = await collection.countDocuments({ "email": _email, "passwort": _password });
        if (daten > 0) {
            return true;
        }
        else {
            return false;
        }
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map