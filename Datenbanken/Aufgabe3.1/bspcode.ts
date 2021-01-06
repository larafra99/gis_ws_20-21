import * as Http from "http";

export namespace P_3_1Server {
    //Konsolen ausgabe
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT); // bekommt einen Port
    if (!port)
        port = 8100; // wenn es keinen Port gibt soll Port 8100 sein

    let server: Http.Server = Http.createServer(); // Erstellen eines HTTP Severs
    server.addListener("request", handleRequest); // ein Eventhandeler = Eventlistener wird eingefügt
    server.addListener("listening", handleListen); // weiterer Eventlistener wird eingefügt 
    server.listen(port); // Eventlistener hört auf port

    function handleListen(): void {
        console.log("Listening"); //Konsolenausgabe
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); // bei Antwort aufbau einer HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); 
        _response.write(_request.url); // Ausgabe einer URL
        _response.end(); // beenden des Programms
    }
}
