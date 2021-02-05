import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";
export namespace Endabgabe {
    
    interface User {
        vorname: string;
        nachname: string;
        email: string;
        passwort: string;    
    }

    interface Daten {
        url: string;
        name: string;
        status: Status;
        id: string;
    }

    interface Status {
        ausgeliehen: string;
        frei: string;
        reserviert: string;
    }

    let collection: Mongo.Collection;
    let collectionData: Mongo.Collection;

    let port: number = Number(process.env.PORT); 
    if (port == undefined) {
        port = 8100; 
    }

    //let dataBaseUrl: string = "mongodb://localhost: 27017";
    let dataBaseUrl: string = "mongodb+srv://Reader:Database123@gisws20-21.a07b1.mongodb.net/ASTA?retryWrites=true&w=majority";
    console.log("Starting server");

    //Aufruf der Funktionen
    startServer(port);
    connectToDatabase(dataBaseUrl);

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
        collection = mongoClient.db("ASTA").collection("User");
        collectionData =  mongoClient.db("ASTA").collection("Data");
        console.log("Database connection sucessfull ", collection != undefined);
    }

    function handleListen(): void {
        console.log(" listening"); 
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!"); 
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);   
            let parameter: ParsedUrlQuery = q.query;

            if (q.pathname == "/login.html") {
                console.log("einloggen");
                sessionStorage.clear();
                let result: boolean =  await einloggen(parameter.email as string , parameter.password as string);
                if (result) {
                    _response.write("Sie sind eingelogt");
                }
                else {
                    _response.write("Fehler aufgetreten Bitte überprüfen sie ihre Daten");
                }   
            }

            else if (q.pathname == "/register.html") {
                console.log("registieren erfolgreich");
                sessionStorage.clear();

                let users: User = {
                    vorname: parameter.fname as string,
                    nachname: parameter.lname as string,
                    email: parameter.email as string,
                    passwort: parameter.password as string
                };

                //console.log(users);
                let resultreg: boolean = await registerien(users);
                if (resultreg) {
                    _response.write("Nutzer wurde erstellt");
                    
                }
                else {
                    _response.write("Emailadresse ist schon vergeben oder Felder sind");
                }    
            }

            else if (q.pathname == "/verleih.html") {
                console.log("verleih");
                let listUser: Daten[] = await showData();
                _response.write( JSON.stringify(listUser) );
            }
            else if (q.pathname == "/ausleihen.html") {
                console.log("ausleihen");
            }
        }

        _response.end();
    }
    async function registerien(_client: User): Promise<boolean> { 
        console.log("registrieren");
        let _suchmail: User = await collection.findOne({"email": _client.email});
        console.log(_suchmail);      

        if (!_client.email || !_client.nachname || !_client.vorname || !_client.passwort) {
            return false;
        }
        else if (_suchmail != undefined) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            let user: string = await collection.findOne({"email": _client.email}, {projection: { nachname: 0, vorname: 0, email: 0, passwort: 0}});
            //sessionStorage.setItem("id", user);
            console.log(user);
            return true;
        }
        

    }
    async function showData(): Promise<Daten[]> {
        let data: Daten[] = await collectionData.find( {}, {projection: { _id: 0}} ).toArray();
        return data;

    }
    async function einloggen(_email: string, _password: string): Promise<boolean> {
        let daten2: string = await collection.findOne({"email": _email}, {projection: { nachname: 0, vorname: 0, email: 0, passwort: 0}} );
        let daten: number = await collection.countDocuments({"email": _email, "passwort": _password});
        
        console.log(daten2);
        sessionStorage.setItem("id", daten2);
        if (daten > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}