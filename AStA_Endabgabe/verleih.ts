namespace Aufgabe3_4 {

    showData();
    interface Teile {
        url: string;
        name: string;
        status: string;
    }

    async function showData(): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/verleih.html";
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let responseTextJson: Teile[] = JSON.parse(responseText);
        //console.log(response);
        console.log(responseTextJson);
        console.log(Object.keys(responseTextJson).length);
        

        let tabl: HTMLElement = document.createElement("table");
        let tableheader1: HTMLElement = document.createElement("th");
        let tableheader2: HTMLElement = document.createElement("th");
        let tableheader3: HTMLElement = document.createElement("th");
        tableheader1.innerHTML = "Bild";
        tableheader2.innerHTML = "Name";
        tableheader3.innerHTML = "Status";
        document.getElementById("showData").appendChild(tabl);
        tabl.appendChild(tableheader1);
        tabl.appendChild(tableheader2);
        tabl.appendChild(tableheader3);
            
        for ( let i: number = 0; i < Object.keys(responseTextJson).length; i++) {

            let tablerow: HTMLElement = document.createElement("tr");
            let tableelement1: HTMLElement = document.createElement("td");
            let tableelement2: HTMLElement = document.createElement("td");
            let tableelement3: HTMLElement = document.createElement("td");
            let imag: HTMLImageElement = document.createElement("img");
            imag.src = "picture/" + responseTextJson[i].url;
            tableelement2.innerHTML = responseTextJson[i].name; 
            //console.log(responseTextJson[1].status);

            if (responseTextJson[i].status == "frei") {
                console.log("frei");
                let button: HTMLButtonElement = document.createElement("button");
                button.addEventListener("click", ausleihen);
                tableelement3.appendChild(button);
                button.innerHTML = "ausleihen";
            }

            else {
                tableelement3.innerHTML = responseTextJson[i].status;
            }

            tablerow.appendChild(tableelement1);
            tablerow.appendChild(tableelement2);
            tablerow.appendChild(tableelement3);
            tableelement1.appendChild(imag);
            tabl.appendChild(tablerow);

        }    

    }  
    async function ausleihen(_event: Event): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/ausleihen.html";

        //url = url + "?" + query.toString();
        console.log(url);
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        //console.log(response);
        console.log(responseText);

        let loginText: HTMLElement = document.createElement("p");
        document.getElementById("response").appendChild(loginText);
        loginText.innerHTML = responseText; 
       
    }
}