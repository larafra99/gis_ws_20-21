namespace Aufgabe211 {
    min(3, 2, 4, 7);
    console.log(isEven(-1));
    
    

    function min (...x: number[]): number {
        let minnum: number = x[0];
        for (let i: number = 1; i < x.length; i++) {
            if (minnum > x[i]) {
                minnum = x[i];
            }

        }
        console.log(minnum);
        return minnum;


    }
    function isEven(y: number): boolean {
        if (y < 0) {
            return false;
        }
        else if (y == 0 ) {
            return true;
        }
        else if (y == 1) {
            return false;
        }
        else {
            return isEven(y - 2);
        }

    }
}

interface Student {
    name: string;
    lastname: string;
    studiengang: string;
    fakultät: string;
    semester: number;
    matrikelnr: number;

}

let s1: Student = {name: "Annika", lastname: "Schmidt", studiengang: "OMB", fakultät: "DM", semester: 3, matrikelnr: 35671};
let s2: Student = {name: "Tristan", lastname: "Müller", studiengang: "IB", fakultät: "I", semester: 1, matrikelnr: 45672};
let s3: Student = {name: "Kim", lastname: "Fischer", studiengang: "IBW", fakultät: "W", semester: 5, matrikelnr: 19877};

let studierende: Array<Student> = [s1, s2, s3, {name: "Erik", lastname: "Fleischer", studiengang: "MIB", fakultät: "DM", semester: 2, matrikelnr: 35984} ];

//function showInfo( m: number ): void {
    //console.log(studierende.find( s => s.matrikelnr === m));

//}
//showInfo(45672);

class Hochschule {
    name: string;
    lastname: string;
    studiengang: string;
    fakultät: string;
    semester: number;
    matrikelnr: number;

   showInfo( m: number ): void {
        console.log(studierende.find( s => s.matrikelnr === m));
    
    }
}
let d: Hochschule = new Hochschule;
d.showInfo(19877);
