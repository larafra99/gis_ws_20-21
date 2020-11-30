namespace aufgabe232 {
 
    class Human {
        head: string;
        body: string;
        leg: string;

        setBody(b: string): void {
            this.body = b;
        }
        setHead(h: string): void {
            this.head = h;
        }
        setLeg(l: string): void {
            this.leg = l;
        }
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
    let f: Human = new Human;
 
    export class Humans {
        heads: Array<string>;
        bodies: Array<string>;
        legs: Array<string>;
        parts: Array<string>;

        constructor() {
            this.heads = koepfe;
            this.bodies = koerper;
            this.legs = beine;
            

        }
        getallhead(): string[] {
            return this.heads;
        }
        getallbodies(): string[] {
            return this.bodies;
        }
        getalllegs(): string[] {
            return this.legs;
        }
        clickFunction(evt: Event): void { 
            let selection: string = (evt.target as Element).innerHTML;
            let bodyPart: string = (evt.target as Element).id;
            console.log( selection, bodyPart );  
            //localStorage.setItem(Selection);
            if (document.getElementById("head") != null) {
                f.setHead(selection);
                //localStorage.setItem("head", Selection);
                window.location.replace("body.html");
            }
            else if (document.getElementById("body") != null) {
                f.setBody(selection);
                window.location.replace("legs.html");
            }
            else if (document.getElementById("leg") != null) {
                f.setLeg(selection);
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

       
        }
        
    }
   
    
    let d: Humans = new Humans;
   
    d.makelist();
    console.log(f.getLeg);

   
   
    
    }
   
 
   
  

