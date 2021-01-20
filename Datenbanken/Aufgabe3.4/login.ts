namespace Aufgabe3_4 {
    let form: HTMLFormElement = <HTMLFormElement>document.getElementById("form");
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    button.addEventListener("click", login);
    let url: string = "https://gisws2021.herokuapp.com/";

    async function login(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);

        let responseText: HTMLElement = document.createElement("p");
        document.getElementById("response").appendChild(responseText);

        //Fehler interface bauen
        
        if (response.status != 200) { // 200 = status ok
            responseText.innerHTML = " Ein Fehler ist aufgetreten, bitte füllen sie alle Felder aus";
        }
        else {
            console.log(response.text());
        }

    }

}

