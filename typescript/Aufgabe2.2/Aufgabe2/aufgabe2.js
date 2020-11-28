"use strict";
var Aufgabe212;
(function (Aufgabe212) {
    let a = [1, 2, 3, 4, 5, 6];
    let b = [7, 8, 9, 10, 11];
    //let c: number[] = [12, 13, 14, 15];
    console.log(backwards(a));
    console.log(join(a, b));
    console.log(split(a, 1, 4));
    //console.log(bonusjoin(a, b, c));
    function backwards(x) {
        let y = [];
        for (let i = 0; i < x.length; i++) {
            y[i] = x[x.length - 1 - i];
        }
        return y;
    }
    function join(g, h) {
        let j = [];
        for (let i = 0; i < g.length; i++) {
            j.push(g[i]);
        }
        for (let k = 0; k < h.length; k++) {
            j.push(h[k]);
        }
        return j;
    }
    /*function bonusjoin(...l: number[]): number[] {
        let z: number[] = [];
        for ( let f: number = 0; f < l.length; f++) {
            z.push(l[f]);
        }
        return z;

    }*/
    function split(t, u, v) {
        let w = [];
        if (u < 0 || v > t.length) {
            return t;
        }
        else {
            w = t.splice(u, v - u);
            return w;
        }
    }
    /*function wrongsplit(m: number[], n: number, o: number): number [] {
        let p: number[];
        let hilf1: number = 0;
        let hilf2: number = 0;
        for ( let q: number = 0; q < m.length; q++) {
            if ( n >= m[q]) {
                hilf1 = m[q];
                console.log("Hilf1", hilf1);
            }
            else if (o >= m[q]) {
                hilf2 = m[q];
                console.log(hilf2);
            }
        }
        if (hilf1 < hilf2) {
            for ( let r: number = 0; r < hilf2; r++) {
                p[r] = m[hilf1 - 1 + r];
            }
        }
        else {
            for ( let s: number = 0; s < hilf1; s++) {
                p[s] = m [hilf2 + s];
            }
        }
        return p;

    }*/
})(Aufgabe212 || (Aufgabe212 = {}));
//# sourceMappingURL=aufgabe2.js.map