 namespace Aufgabe3_4 {

    let clientButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clients");
    clientButton.addEventListener("click", showClient);

    async function showClient(_event: Event): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/clients.html";
        let response: Response = await fetch(url);
        console.log(response);
        console.group(url);


       
        let allClients: HTMLElement = document.createElement("p");
        document.getElementById("showclients").appendChild(allClients);

    }

  
}