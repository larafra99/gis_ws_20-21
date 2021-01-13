
let form: HTMLFormElement = <HTMLFormElement>document.getElementById("form");
let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
button.addEventListener("click", sendToServer);
let url: string = "https://gisws2021.herokuapp.com/";

async function sendToServer(_event: Event): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    url = url + "?" + query.toString();
    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    console.log(response);
    console.log("Response Text: " + responseText);
}