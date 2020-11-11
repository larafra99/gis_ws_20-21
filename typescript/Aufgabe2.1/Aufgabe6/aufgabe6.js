"use strict";
string();
number();
fizzbuzz();
chess();
chess2(3, 4);
function string() {
    let a = "";
    while (a.length < 7) {
        a = a + "#";
        console.log(a);
    }
}
function number() {
    for (let i = 0; i < 100; i++) {
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
function fizzbuzz() {
    for (let i = 0; i < 100; i++) {
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
function chess() {
    let board = "";
    let zeichen = " ";
    for (let laenge = 0; laenge < 8; laenge++) {
        for (let breite = 0; breite < 8; breite++) {
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
function chess2(x, y) {
    let board = "";
    let zeichen = " ";
    for (let laenge = 0; laenge < x; laenge++) {
        for (let breite = 0; breite < y; breite++) {
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
//# sourceMappingURL=aufgabe6.js.map