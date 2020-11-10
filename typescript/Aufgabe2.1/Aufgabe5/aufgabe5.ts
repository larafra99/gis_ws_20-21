let a: number = 5;
let b: number = 6;
multiply(a, b);
max(a , b);
count();
random();
factorial(3);
leapyear();

function multiply (x: number, y: number): void {
    let c: number = x * y;
    console.log(c);
}
function max (x: number, y: number): number {
    if (x < y) {
        return y;
    }
    else {
        return x;
    }
    
}
function count(): void {
    let d: number = 0;
    let e: number = 1;
    while (e <= 100) {
        d = d + e;
        e++;
    }
    console.log(d);
}
function random(): void {
    for ( let index: number = 0; index < 10; index++) {
       console.log(Math.random()) ;
    }

}
function factorial(n: number): number {
    let f: number = 1;
    if (n <= 1) {
        return 1;
    }
    else {
        for ( let index: number = 1; index <= n; index++) {
            f = f * index;
        }
        console.log(f);
        return f;

    }
}
function leapyear(): void {
    for ( let jahr: number = 1900; jahr <= 2020; jahr++) {
        if (jahr % 4 == 0) {
            if (jahr % 100 != 0 ) {
                console.log(jahr);
            }
            else if (jahr % 400 == 0) {
                console.log(jahr);
            }
        }
        
    }
}

