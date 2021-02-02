import * as Http from "http";
import * as Mongo from "mongodb";


let collection: Mongo.Collection;
let port: number = Number(process.env.PORT); 
if (port == undefined) {
    port = 8100; 
}
interface Daten {
    url: string;
    name: string;
    status: string;
}
let d1: Daten = {name: "Beamer", url: "beamer.jpg", status: "frei"};
let d2: Daten = {name: "Biertischgarnitur", url: "biertischgarnitur.jpg", status: "frei"};
let d3: Daten = {name: "Kabeltrommel", url: "kabeltrommel.jpg", status: "frei"};
let d4: Daten = {name: "Kaffemaschine", url: "kaffemaschine.jpg", status: "frei"};
let d5: Daten = {name: "Kochplatte", url: "kochplatte.jpg", status: "frei"};
let d6: Daten = {name: "Kühlschrank", url: "kuehlschrank.jpg", status: "frei"};
let d7: Daten = {name: "Leinwand", url: "leinwand.jpg", status: "frei"};
let d8: Daten = {name: "Waffeleisen", url: "waffeleisen.jpg", status: "frei"};
let d9: Daten = {name: "Zelt", url: "zelt.jpg", status: "frei"};


//let dataBaseUrl: string = "mongodb://localhost: 27017";
let dataBaseUrl: string = "mongodb+srv://Reader:Database123@gisws20-21.a07b1.mongodb.net/ASTA?retryWrites=true&w=majority";
console.log("Starting server");

//Aufruf der Funktionen
startServer(port);
connectToDatabase(dataBaseUrl);

//Server erstellen
function startServer(_port: number | string): void {
    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen); 
    server.listen(_port); 
}

async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    collection = mongoClient.db("ASTA").collection("Data");
    console.log("Database connection sucessfull", collection != undefined);
}

function handleListen(): void {
    console.log(" listening"); 
}
async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
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