"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let collection;
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
        console.log("Database connection sucessfull User", collection != undefined);
    }
    async function gettingData(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collection = mongoClient.db("ASTA").collection("Data");
        console.log("Database connection sucessfull Data", collection != undefined);
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
            //for (let key in q.query) {
            //_response.write (key + ":" + q.query[key] + "<br/>");   
            //}
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
                    studiengang: parameter.studiengang,
                    passwort: parameter.password
                };
                console.log(users);
                let resultreg = await registerien(users);
                if (resultreg) {
                    _response.write("Nutzer wurde erstellt");
                }
                else {
                    _response.write("Emailadresse ist schon vergeben bitte nutzen sie Login");
                }
            }
            else if (q.pathname == "/verleih.html") {
                console.log("verleih");
                let listUser = await showData();
                _response.write(JSON.stringify(listUser));
            }
        }
        _response.end();
    }
    async function registerien(_client) {
        connectToDatabase(dataBaseUrl);
        console.log("regstrieren");
        let _suchmail = await collection.findOne({ "email": _client.email });
        if (_suchmail != undefined) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            return true;
        }
    }
    async function showData() {
        gettingData(dataBaseUrl);
        let data = await collection.find({}, { projection: { _id: 0 } }).toArray();
        connectToDatabase(dataBaseUrl);
        return data;
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
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map