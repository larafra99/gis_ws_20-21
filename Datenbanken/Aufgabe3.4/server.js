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
    //let dataBaseUrllocal: string = "mongodb://localhost: 27017";
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
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_request.url);
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            console.log(q);
            for (let key in q.query) {
                console.log(key);
                _response.write(key + ":" + q.query[key] + "<br/>");
            }
            if (q.path == "\login.html") {
                console.log("einloggen");
                einloggen();
            }
            else if (q.path == "\register.html") {
                console.log("registieren");
                //let users: User = {"benutzername": benutzername, "email": email , "passwort": passwort};
                //registerien(users);
            }
            else if (q.path == "\clients.html") {
                console.log("benutzer");
                showClients();
            }
            let uni = JSON.stringify(q.query);
            _response.write(uni);
            //unidata(uni);
        }
        _response.end();
    }
    function registerien(_client) {
    }
    function showClients() {
    }
    async function einloggen() {
        let password = User.passwort;
        let _email = User.email;
        let username = User.benutzername;
        let check = await user.find({ _email, password, username });
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map