function getRec(): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("MyFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    class Rec {
        a: number;
        b: number;
        breite: number;
        hoehe: number;
        rechteck: number[][];

    constructor() {
        this.a = (Math.random() * 300) + 50;
        this.b = (Math.random() * 300) + 50;
        this.breite = (Math.random() * 100) + 50;
        this.hoehe = (Math.random() * 100) + 50;
        this.rechteck = [];
    }

    createRec(): void {
        this.rechteck.push ([this.a, this.b, this.hoehe, this.breite]);
    }
    drawRec(): void {
        this.rechteck.push ([this.a, this.b, this.hoehe, this.breite]);

        for (let i: number = 0; i < this.rechteck.length; i++) {
            context.beginPath();
            context.strokeRect(this.a, this.b, this.breite, this.hoehe);
            context.stroke();
            context.closePath();
        }   
    }
}

    let d: Rec = new Rec;
    d.createRec();
    d.drawRec();
}

getRec();

