import * as Http from "http";
import * as Url from "url";

export namespace Aufgabe3_2 {
    console.log("Starting server"); 
    let port: number = Number(process.env.PORT); 
    if (!port)
        port = 8100; 
    
    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen); 
    server.listen(port); 

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
    
            let stringJSON: string = JSON.stringify(q.query);
            _response.write(stringJSON);
        }

        _response.end();
    }

}