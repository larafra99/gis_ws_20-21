namespace Aufgabe3_4 {

    showData();

    async function showData(): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/verleih.html";
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        //let responseTextJson: JSON = JSON.parse(responseText);
        console.log(response);
        //console.log(responseText);
        //console.log(url);

        for (let i: number = 0; i < responseText.length; i++) {
            console.log(i);

        }
        //for ( let parts in responseText) {

        }
        //console.log(responseText);
        //let allClients: HTMLElement = document.createElement("p");
        //document.getElementById("showData").appendChild(allClients);
        //allClients.innerHTML = responseText;
        //let names: string[];

        //if (document.getElementById("name") != null) {
            //names.push();
            //console.log(names);

        } 


    }  
}