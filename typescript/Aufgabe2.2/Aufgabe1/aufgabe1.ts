namespace Aufgabe211 {
    let a: number[] = [3, 2, 4, 7];
    min(a);
    console.log(isEven(-1));
    

    function min (x: number[]): number {
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
        else if (y == 1){
            return false;
        }
        else {
            return isEven(y - 2);
        }

    }
}



