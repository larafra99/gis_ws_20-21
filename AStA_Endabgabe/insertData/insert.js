"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Mongo = require("mongodb");
let collection;
let port = Number(process.env.PORT);
if (port == undefined) {
    port = 8100;
}
let d1 = { name: "Beamer", url: "beamer.jpg", status: "frei" };
let d2 = { name: "Biertischgarnitur", url: "biertischgarnitur.jpg", status: "frei" };
let d3 = { name: "Kabeltrommel", url: "kabeltrommel.jpg", status: "frei" };
let d4 = { name: "Kaffemaschine", url: "kaffemaschine.jpg", status: "frei" };
let d5 = { name: "Kochplatte", url: "kochplatte.jpg", status: "frei" };
let d6 = { name: "Kühlschrank", url: "kuehlschrank.jpg", status: "frei" };
let d7 = { name: "Leinwand", url: "leinwand.jpg", status: "frei" };
let d8 = { name: "Waffeleisen", url: "waffeleisen.jpg", status: "frei" };
let d9 = { name: "Zelt", url: "zelt.jpg", status: "frei" };
//let dataBaseUrl: string = "mongodb://localhost: 27017";
let dataBaseUrl = "mongodb+srv://Reader:Database123@gisws20-21.a07b1.mongodb.net/ASTA?retryWrites=true&w=majority";
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
    collection = mongoClient.db("ASTA").collection("Data");
    console.log("Database connection sucessfull", collection != undefined);
}
function handleListen() {
    console.log(" listening");
}
async function handleRequest(_request, _response) {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    await collection.insertOne(d1);
    await collection.insertOne(d2);
    await collection.insertOne(d3);
    await collection.insertOne(d4);
    await collection.insertOne(d5);
    await collection.insertOne(d6);
    await collection.insertOne(d7);
    await collection.insertOne(d8);
    await collection.insertOne(d9);
}
//# sourceMappingURL=insert.js.map