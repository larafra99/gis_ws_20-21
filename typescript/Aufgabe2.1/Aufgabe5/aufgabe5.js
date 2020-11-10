"use strict";
let a = 5;
let b = 6;
multiply(a, b);
max(a, b);
count();
random();
factorial(3);
leapyear();
function multiply(x, y) {
    let c = x * y;
    console.log(c);
}
function max(x, y) {
    if (x < y) {
        return y;
    }
    else {
        return x;
    }
}
function count() {
    let d = 0;
    let e = 1;
    while (e <= 100) {
        d = d + e;
        e++;
    }
    console.log(d);
}
function random() {
    for (let index = 0; index < 10; index++) {
        console.log(Math.random());
    }
}
function factorial(n) {
    let f = 1;
    if (n <= 1) {
        return 1;
    }
    else {
        for (let index = 1; index <= n; index++) {
            f = f * index;
        }
        console.log(f);
        return f;
    }
}
function leapyear() {
    for (let jahr = 1900; jahr <= 2020; jahr++) {
        if (jahr % 4 == 0) {
            if (jahr % 100 != 0) {
                console.log(jahr);
            }
            else if (jahr % 400 == 0) {
                console.log(jahr);
            }
        }
    }
}
//# sourceMappingURL=aufgabe5.js.map