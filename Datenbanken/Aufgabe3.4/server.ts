import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {
    
    interface User {
        benutzername: string;
        email: string;
        passwort: string;    
    }

    interface Answer {
        [type: string ]: string | string[];
    }

    interface Fehler {
        falschesPasswort: string;
        faslcheEmail: string;
        faslcherBenutzername: string;
    }

    let collection: Mongo.Collection;

    //Port erstellen
    let port: number = Number(process.env.PORT); 
    if (port == undefined) {
        port = 8100; 
    }

    //let dataBaseUrl: string = "mongodb://localhost: 27017";
    let dataBaseUrl: string = "mongodb+srv://Reader:Database123@gisws20-21.a07b1mongodb.net/Endabgabe?retryWrites=true&w=majority";
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

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); 
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true); 
            console.log(q.pathname);    
            for (let key in q.query) {
                //console.log(key);
                _response.write (key + ":" + q.query[key] + "<br/>");
               
            }
            if (q.pathname == "\login.html") {
                console.log("einloggen");
                einloggen();

            }
            else if (q.pathname == "\register.html") {
                console.log("registieren");
                //let users: User = {"benutzername": benutzername, "email": email , "passwort": passwort};
                //registerien(users);

            }
            else if (q.pathname == "\clients.html") {
                console.log("benutzer");
                showClients();
            }
    
            let uni: string = JSON.stringify(q.query);
            _response.write(uni);

            //unidata(uni);
        }

        _response.end();
    }
    function registerien(_client: User) {

    }
    function showClients() {

    }
    async function einloggen() {
        let password = User.passwort;
        let _email = User.email;
        let username = User.benutzername;
        let check: Mongo.CollationDocument = await user.find({_email, password, username});



    }


}