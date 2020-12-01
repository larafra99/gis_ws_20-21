namespace aufgabe232 {
 
    class Human {
        head: string;
        body: string;
        leg: string;

        getBody(): string {
             return this.body;
        }
        getHead(): string {
            return this.head;
        }
        getLeg(): string {
             return this.leg;
        }

    }
    export interface Parts {
        top: Array<string>;
        middle: Array<string>;
        bottom: Array<string>;
    }
    class Humans {
        heads: Array<string>;
        bodies: Array<string>;
        legs: Array<string>;

        constructor() {
            let humanparts: string = dataJSonString();
            let parts: Parts = JSON.parse(humanparts);
            this.heads = parts.top;
            this.bodies = parts.middle;
            this.legs = parts.bottom;

        }
      
        clickFunction(evt: Event): void { 
            let selection: string = (evt.target as Element).innerHTML;
            if (document.getElementById("head") != null) {
                sessionStorage.setItem("head", selection);
                window.location.replace("body.html");
            }
            else if (document.getElementById("body") != null) {
                sessionStorage.setItem("body", selection);
                window.location.replace("legs.html");
            }
            else if (document.getElementById("leg") != null) {
                sessionStorage.setItem("leg", selection);
                window.location.replace("human.html");
            }   
        }
        
        makelist(): void {
            if (document.getElementById("Auswahl") != null) {
                for (var i of this.heads) {
                    let knopf: HTMLElement = document.createElement("button");
                    knopf.innerHTML = i;
                    knopf.id = "head";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("Auswahl").appendChild(knopf);
                }
            }
            else if (document.getElementById("koerper") != null) {
                for (var l of this.bodies) {
                    let knopf: HTMLElement = document.createElement("button");
                    knopf.innerHTML = l;
                    knopf.id = "body";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("koerper").appendChild(knopf);
                }   
            }
            else if (document.getElementById("beine") != null) {
                for (var k of this.legs) {
                    let knopf: HTMLElement = document.createElement("button");
                    knopf.innerHTML = k;
                    knopf.id = "leg";
                    knopf.addEventListener("click", this.clickFunction);
                    document.getElementById("beine").appendChild(knopf);
                }
            }
            
            if (document.getElementById("example") != null) {
                sessionStorage.clear();


            }
            else {
                let list: HTMLElement = document.createElement("ul");
                document.getElementById("finish").appendChild(list);
                let listele1: HTMLElement = document.createElement("li");
                let listele2: HTMLElement = document.createElement("li");
                let listele3: HTMLElement = document.createElement("li");
                listele1.innerHTML = sessionStorage.getItem("head");
                list.appendChild(listele1);
                listele2.innerHTML = sessionStorage.getItem("body");
                list.appendChild(listele2);
                listele3.innerHTML = sessionStorage.getItem("leg");
                list.appendChild(listele3);
            }


            
        }   
    }
   
    
    let d: Humans = new Humans;
    if (document)
    d.makelist();

    }
   
 
   
  

