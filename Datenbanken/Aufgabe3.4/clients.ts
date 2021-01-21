export namespace Aufgabe3_4 {

    let clientButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clients");
    clientButton.addEventListener("click", showClient);

    async function showClient(): Promise<void> {
        let response: Response = await fetch(url, client);

        let client: HTMLElement = document.createElement("p");
        document.getElementById("showclient").appendChild(client);
        client.innerText = User.vorname
    }
}