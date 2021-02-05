"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let collection;
    let collectionData;
    let port = Number(process.env.PORT);
    if (port == undefined) {
        port = 8100;
    }
    //let dataBaseUrl: string = "mongodb://localhost: 27017";
    let dataBaseUrl = "mongodb+srv://Reader:Database123@gisws20-21.a07b1.mongodb.net/ASTA?retryWrites=true&w=majority";
    console.log("Starting server");
    //Aufruf der Funktionen
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
        collection = mongoClient.db("ASTA").collection("User");
        collectionData = mongoClient.db("ASTA").collection("Data");
        console.log("Database connection sucessfull ", collection != undefined);
    }
    function handleListen() {
        console.log(" listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
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
                console.log("registieren erfolgreich");
                let users = {
                    vorname: parameter.fname,
                    nachname: parameter.lname,
                    email: parameter.email,
                    passwort: parameter.password
                };
                //console.log(users);
                let resultreg = await registerien(users);
                if (resultreg) {
                    _response.write("Nutzer wurde erstellt");
                }
                else {
                    _response.write("Emailadresse ist schon vergeben oder Felder sind");
                }
            }
            else if (q.pathname == "/verleih.html") {
                console.log("verleih");
                let listUser = await showData();
                _response.write(JSON.stringify(listUser));
            }
            else if (q.pathname == "/ausleihen.html") {
                console.log("ausleihen");
            }
        }
        _response.end();
    }
    async function registerien(_client) {
        console.log("registrieren");
        let _suchmail = await collection.findOne({ "email": _client.email });
        console.log(_suchmail);
        let user = await collection.findOne({ "email": _client.email });
        console.log(user);
        //sessionStorage.setItem("id", _client.id);
        //console.log(sessionStorage.getItem("id"));
        if (!_client.email || !_client.nachname || !_client.vorname || !_client.passwort) {
            return false;
        }
        else if (_suchmail != undefined) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            return true;
        }
    }
    async function showData() {
        let data = await collectionData.find({}, { projection: { _id: 0 } }).toArray();
        return data;
    }
    async function einloggen(_email, _password) {
        let daten2 = await collection.findOne({ "email": _email }, { projection: { nachname: 0, vorname: 0, email: 0, passwort: 0 } });
        let daten = await collection.countDocuments({ "email": _email, "passwort": _password });
        console.log(daten2);
        if (daten > 0) {
            return true;
        }
        else {
            return false;
        }
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map