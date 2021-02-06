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
                let result: string =  await einloggen(parameter.email as string , parameter.password as string);
                console.log("Login:", result);
                _response.write(JSON.stringify(result));
            }

            else if (q.pathname == "/register.html") {
                console.log("registieren erfolgreich");

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
                console.log(parameter.dataID);
                await ausleihen(parameter.userID as string , parameter.dataID as string);
            }
            else if (q.pathname == "/showUser.html") {
                console.log("showUser");
                console.log(parameter.userID );
                await showuser(parameter.userID as string);

            }
            else if (q.pathname == "/astaverleih.html") {
                console.log("astaverleih");

            }
        }

        _response.end();
    }
    async function registerien(_client: User): Promise<boolean> { 
        console.log("registrieren");
        let _suchmail: User = await collection.findOne({"email": _client.email});    

        if (!_client.email || !_client.nachname || !_client.vorname || !_client.passwort) {
            return false;
        }
        else if (_suchmail != undefined) {
            return false;
        }
        else {
            await collection.insertOne(_client);
            let user: string = await collection.findOne({"email": _client.email}, {projection: { nachname: 0, vorname: 0, email: 0, passwort: 0}});
            console.log(user);
            return true;
        }
        

    }
    async function showData(): Promise<Daten[]> {
        let data: Daten[] = await collectionData.find().toArray();
        return data;

    }
    async function einloggen(_email: string, _password: string): Promise<string> {
        let daten2: string = await collection.findOne({"email": _email}, {projection: { nachname: 0, vorname: 0, email: 0, passwort: 0}} );
        //let daten: number = await collection.countDocuments({"email": _email, "passwort": _password});
        
        console.log(daten2);
        return daten2;
    }
    async function ausleihen( userId: string , dataId: string): Promise<void> {
        console.log("datenbank");
        let res: string = await collectionData.findOne({_id: Mongo.ObjectId.createFromHexString(dataId)});
        console.log(res);
        await collectionData.updateOne({_id: Mongo.ObjectId.createFromHexString(dataId)}, {$set: {"reserviert": userId, "status": "reserviert"} });  
    }
    async function showuser(userID: string): Promise<void> {
        console.log("User");
        let id: string = userID.substr(8, userID.length - 2);
        console.log(id);
        let user: User = await collection.findOne({_id: id});
        console.log(user);
        

    }
}