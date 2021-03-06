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
                console.log("Login:", result);
                _response.write(JSON.stringify(result));
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
                    _response.write("Emailadresse ist schon vergeben oder Felder sind leer");
                }
            }
            else if (q.pathname == "/verleih.html") {
                console.log("verleih");
                let listUser = await showData();
                _response.write(JSON.stringify(listUser));
            }
            else if (q.pathname == "/ausleihen.html") {
                console.log("ausleihen");
                console.log(parameter.dataID);
                await ausleihen(parameter.userID, parameter.dataID);
            }
            else if (q.pathname == "/showUser.html") {
                console.log("showUser");
                let nutzer = await showuser(parameter.userID);
                console.log(nutzer);
                _response.write(JSON.stringify(nutzer));
            }
            else if (q.pathname == "/astaverleihausleihen.html") {
                console.log("astaverleih");
                console.log(parameter.buttonID);
                await astaverleih(parameter.buttonID);
            }
            else if (q.pathname == "/astaverleih.html") {
                console.log("astaverleih");
                console.log(parameter.buttonID);
                await astaverleihfrei(parameter.buttonID);
            }
        }
        _response.end();
    }
    async function registerien(_client) {
        console.log("registrieren");
        let _suchmail = await collection.findOne({ "email": _client.email });
        if (!_client.email || !_client.nachname || !_client.vorname || !_client.passwort) {
            return false;
        }
        else if (_suchmail != undefined) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            let user = await collection.findOne({ "email": _client.email }, { projection: { nachname: 0, vorname: 0, email: 0, passwort: 0 } });
            console.log(user);
            return true;
        }
    }
    async function showData() {
        let data = await collectionData.find().toArray();
        return data;
    }
    async function einloggen(_email, _password) {
        let daten2 = await collection.findOne({ "email": _email }, { projection: { nachname: 0, vorname: 0, email: 0, passwort: 0 } });
        //let daten: number = await collection.countDocuments({"email": _email, "passwort": _password});
        console.log(daten2);
        return daten2;
    }
    async function ausleihen(userId, dataId) {
        let res = await collectionData.findOne({ _id: Mongo.ObjectId.createFromHexString(dataId) });
        console.log(res);
        await collectionData.updateOne({ _id: Mongo.ObjectId.createFromHexString(dataId) }, { $set: { "reserviert": userId, "status": "reserviert" } });
    }
    async function showuser(userID) {
        let user = await collection.findOne({ _id: Mongo.ObjectId.createFromHexString(userID) }, { projection: { _id: 0, email: 0, passwort: 0 } });
        return user;
    }
    async function astaverleih(buttonId) {
        console.log("datenbank");
        await collectionData.updateOne({ _id: Mongo.ObjectId.createFromHexString(buttonId) }, { $set: { "status": "ausgeliehen" } });
    }
    async function astaverleihfrei(buttonId) {
        console.log("datenbank");
        await collectionData.updateOne({ _id: Mongo.ObjectId.createFromHexString(buttonId) }, { $set: { "reserviert": "null", "status": "frei" } });
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map