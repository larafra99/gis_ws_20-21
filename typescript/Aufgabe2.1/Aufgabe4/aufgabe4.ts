let x: string = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func3();
console.log(x);

function func4(y: string): void {
    y = "Bla";
    console.log(y);
}

function func5(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}
