import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";
export namespace Aufgabe3_4 {
    
    interface User {
        vorname: string;
        nachname: string;
        email: string;
        passwort: string;    
    }

    let collection: Mongo.Collection;

    //Port erstellen
    let port: number = Number(process.env.PORT); 
    if (port == undefined) {
        port = 8100; 
    }

    //let dataBaseUrl: string = "mongodb://localhost: 27017";
    let dataBaseUrl: string = "mongodb+srv://Reader:Database123@gisws20-21.a07b1.mongodb.net/Endabgabe?retryWrites=true&w=majority";
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
        collection = mongoClient.db("Endabgabe").collection("Users");
        console.log("Database connection sucessfull", collection != undefined);
    }

    function handleListen(): void {
        console.log(" I am listening"); 
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!"); 
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);    
            for (let key in q.query) {
                _response.write (key + ":" + q.query[key] + "<br/>");   
            }
            let parameter: ParsedUrlQuery = q.query;

            if (q.pathname == "/login.html") {
                console.log("einloggen");
                let result: boolean =  await einloggen(parameter.email as string , parameter.password as string);
                if (result) {
                    _response.write("Sie sind eingelogt");
                }
                else {
                    _response.write("Fehler aufgetreten Bitte überprüfen sie ihre Daten");
                }   
            }

            else if (q.pathname == "/register.html") {
                console.log("registieren");
                let users: User = {
                    vorname: parameter.fname as string,
                    nachname: parameter.lname as string,
                    email: parameter.email as string,
                    passwort: parameter.password as string
                };
                let resultreg: boolean = await registerien(users);
                if (resultreg) {
                    _response.write("Nutzer wurde erstellt");
                }
                else {
                    _response.write("Emailadresse ist schon vergeben bitte nutzen sie Login");
                }    
            }

            else if (q.pathname == "/clients.html") {
                console.log("benutzer");
                let listUser: User[] = await showClients();
                _response.write( JSON.stringify(listUser) );
            }
        }

        _response.end();
    }
    async function registerien(_client: User): Promise<boolean> { 
        let _suchmail: number = await collection.countDocuments({"email": _client.email});
        if (_suchmail > 0) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            return true;
        }

    }
    async function showClients(): Promise<User[]> {
        let allUser: User[] = await collection.find().toArray();
        return allUser;

    }
    async function einloggen(_email: string, _password: string): Promise<boolean> {
        let daten: number = await collection.countDocuments({"email": _email, "passwort": _password});
        if (daten > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}