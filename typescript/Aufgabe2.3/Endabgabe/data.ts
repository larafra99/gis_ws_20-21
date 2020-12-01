namespace aufgabe232 {
    //let koepfe: Array<string> = ["head1aa", "head2", "head3"];
    let koepfe: Array<object> = [URL:body1.png , "head2", "head3"];
    let koerper: Array<string> = ["body1", "body2", "body3"];
    let beine: Array<string> = ["leg1", "leg2", "leg3"];

    export function dataJSonString(): string {
        let teile: Parts = {top: koepfe, middle: koerper, bottom: beine};
        return JSON.stringify(teile );

    }
}





