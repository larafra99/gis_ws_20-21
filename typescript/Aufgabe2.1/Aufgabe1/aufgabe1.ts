function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1(): void {
    console.log("Klar?");
}
function func2(): void {
    console.log("Gute!");
}
