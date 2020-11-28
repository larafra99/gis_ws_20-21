export namespace aufgabe232 {
 
    class Humans {
        heads: Array<string>;
        bodies: Array<string>;
        legs: Array<string>;

        constructor() {
            this.heads = ["head1", "head2", "head3"];
            this.bodies = ["body1", "body2", "body3"];
            this.legs = ["leg1", "leg2", "leg3"];

        }
        getallhead(): String[] {
            return this.heads;
        }
        getallbodies(): String[] {
            return this.bodies;
        }
        getalllegs(): String[] {
            return this.legs;
        }
    }
}
