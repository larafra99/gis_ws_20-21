namespace aufgabe232 {
    export let koepfe: Array<string> = ["head1aa", "head2", "head3"];
    export let koerper: Array<string> = ["body1", "body2", "body3"];
    export let beine: Array<string> = ["leg1", "leg2", "leg3"];

    function dataJSonString(): string {
        let parts: Humans = {heads: koepfe, bodies: koerper, legs: beine};
        return JSON.stringify(parts);


    }
}





