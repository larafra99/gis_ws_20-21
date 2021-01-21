namespace Aufgabe3_4 {
    let regForm: HTMLFormElement = <HTMLFormElement>document.getElementById("form");
    let regButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("register");
    regButton.addEventListener("click", register);
    let url: string = "https://gisws2021.herokuapp.com/";

    interface Answer {
        [type: string]: string | number;
    }

    async function register(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        console.log(response.text());

        let registerText: HTMLElement = document.createElement("p");
        document.getElementById("register").appendChild(registerText);

        //Fehler interface bauen
        
        //let text: string = await response.text();
        //console.log(text);
        //let statusCode: StatusCode = Number.parseInt(text);
        //console.log(statusCode);
        //let answer: Answer = await response.json();
        //let status: number = <number>answer.status;
        //console.log(status);
        //if (response.status != 200) { // 200 = status ok
          //  registerText.innerText = " Ein Fehler ist aufgetreten";
        //}
        //else {
            //console.log(response.text());
        //}

    }

}