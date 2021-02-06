namespace Aufgabe3_4 {

    showData();
    interface Teile {
        url: string;
        name: string;
        status: string;
        geld: string;
        _id: string;
        reserviert: string;
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
        let tableheader4: HTMLElement = document.createElement("th");
        tableheader1.innerHTML = "Bild";
        tableheader2.innerHTML = "Name";
        tableheader3.innerHTML = "Status";
        tableheader4.innerHTML = "Nutzer";
        document.getElementById("showData").appendChild(tabl);
        tabl.appendChild(tableheader1);
        tabl.appendChild(tableheader2);
        tabl.appendChild(tableheader3);
        tabl.appendChild(tableheader4);
            
        for ( let i: number = 0; i < Object.keys(responseTextJson).length; i++) {

            let tablerow: HTMLElement = document.createElement("tr");
            let tableelement1: HTMLElement = document.createElement("td");
            let tableelement2: HTMLElement = document.createElement("td");
            let tableelement3: HTMLElement = document.createElement("td");
            let tableelement4: HTMLElement = document.createElement("td");
            let imag: HTMLImageElement = document.createElement("img");
            imag.src = "picture/" + responseTextJson[i].url;
            tableelement2.innerHTML = responseTextJson[i].name; 
            tableelement4.innerHTML = responseTextJson[i].reserviert; 
            //console.log(responseTextJson[1].status);
            console.log(sessionStorage.getItem("userId"));
            console.log("respone" + responseTextJson[i].reserviert );

            if (responseTextJson[i].status == "reserviert") {
                let button: HTMLButtonElement = document.createElement("button");
                button.addEventListener("click", ausgeliehen);
                button.id = responseTextJson[i]._id;
                //console.log(responseTextJson[i]._id);
                tableelement3.appendChild(button);
                button.innerHTML = "ausgeliehen";
                await gettingUser(responseTextJson[i].reserviert);
            }
            else if (responseTextJson[i].status == "ausgeliehen") {
                let button: HTMLButtonElement = document.createElement("button");
                button.addEventListener("click", frei);
                button.id = responseTextJson[i]._id;
                //console.log(responseTextJson[i]._id);
                tableelement3.appendChild(button);
                button.innerHTML = "frei";
                await gettingUser(responseTextJson[i].reserviert);
            }
            else {
                tableelement3.innerHTML = responseTextJson[i].status;
                
                
                
            }

            tablerow.appendChild(tableelement1);
            tablerow.appendChild(tableelement2);
            tablerow.appendChild(tableelement3);
            tablerow.appendChild(tableelement4);
            tableelement1.appendChild(imag);
            tabl.appendChild(tablerow);

        }    

    }
    async function gettingUser(user: string): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/showuser.html";
        url = url + "?" + user;
        console.log(url);
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        //console.log(response);
        console.log(responseText);
    }  
    async function ausgeliehen(_event: Event): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/astaverleih.html";

        let userId: string = sessionStorage.getItem("userId");
        let dataId: string = (_event.target as HTMLImageElement).id;
        console.log(dataId);
        url = url + "?" + "userID=" + userId + "&dataID=" + dataId;
        console.log(url);
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        //console.log(response);
        console.log(responseText);
        window.location.replace("astaverleih.html");  
       
    }
    async function frei(_event: Event): Promise<void> {
        let url: string = "https://gisws2021.herokuapp.com/astaverleih.html";

        let userId: string = sessionStorage.getItem("userId");
        let dataId: string = (_event.target as HTMLImageElement).id;
        console.log(dataId);
        url = url + "?" + "userID=" + userId + "&dataID=" + dataId;
        console.log(url);
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        //console.log(response);
        console.log(responseText);
        window.location.replace("astaverleih.html"); 
       
    }
}