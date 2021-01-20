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

    let user: Mongo.Collection;

    let port: number = Number(process.env.PORT); 
    if (port == undefined) {
        port = 8100; 
    }

    let dataBaseUrl: string = "mongodb://localhost: 27017";
    console.log("Starting server");
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
        user = mongoClient.db("Database").collection("Users");
        console.log("Database connection sucessfull", user != undefined);
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
            for (let key in q.query) {
                _response.write (key + ":" + q.query[key] + "<br/>");
            }
    
            let uni: string = JSON.stringify(q.query);
            _response.write(uni);

            //unidata(uni);
        }

        _response.end();
    }
    function unidata(_uni: User): void {
        //unidata.insert(_uni);

    }

}