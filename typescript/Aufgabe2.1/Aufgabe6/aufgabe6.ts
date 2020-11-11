string();
number();
fizzbuzz();
chess();
chess2(3, 4);

function string(): void {
    let a: string = "";
    while (a.length < 7) {
        a = a + "#";
        console.log(a);
    }
}
function number(): void {
    for (let i: number = 0; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }

    }

}
function fizzbuzz(): void {
    for (let i: number = 0; i < 100; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }

    }

}
function chess(): string {
    let board: string = "";
    let zeichen: string = " ";
    for (let laenge: number = 0; laenge < 8; laenge++) {
        for (let breite: number = 0; breite < 8; breite++) {
            if (zeichen == "#") {
                board = board + " ";
                zeichen = " ";
            }
            else {
                board = board + "#";
                zeichen = "#";
            }
        }
        board = board + "\n";
        if (zeichen == "#") {
            zeichen = " ";
        }
        else {
            zeichen = "#";
        }
    }
    console.log(board);
    return board;

}
function chess2 (x: number, y: number): string {
    let board: string = "";
    let zeichen: string = " ";
    for (let laenge: number = 0; laenge < x; laenge++) {
        for (let breite: number = 0; breite < y; breite++) {
            if (zeichen == "#") {
                board = board + " ";
                zeichen = " ";
            }
            else {
                board = board + "#";
                zeichen = "#";
            }
        }
        board = board + "\n";
        if (x % 2 == 0 || y % 2 == 0) {
            if (zeichen == "#") {
                zeichen = " ";
            }
            else {
                zeichen = "#";
            }

        }
         
    }
    console.log(board);
    return board;

}
