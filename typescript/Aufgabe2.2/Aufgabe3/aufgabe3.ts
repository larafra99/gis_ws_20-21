function getContext(): void {
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("FirstCanvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = "#04B404";
ctx.fillRect(0, 400, 800, 50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#045FB4";
ctx.fillRect(0, 0, 800, 400);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "#FFFFFF";
ctx.strokeRect(200, 300, 100, 100);
ctx.fillRect(237, 350, 26, 50);
ctx.moveTo(200, 300);
ctx.lineTo(250, 230);
ctx.moveTo(300, 300);
ctx.lineTo(250, 230);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#3B240B";
ctx.fillRect(400, 350, 25, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#21610B";
ctx.strokeStyle = "#21610B";
ctx.moveTo(415, 350);
ctx.bezierCurveTo(350, 350, 300, 300, 400, 300);
ctx.moveTo(415, 350);
ctx.bezierCurveTo(480, 350, 450, 300, 400, 300);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.strokeStyle = "#FFFFFF";
ctx.bezierCurveTo(150, 50, 50, 105, 50, 50);
ctx.bezierCurveTo(150, 50, 100, 25, 200, 50);
ctx.bezierCurveTo(200, 50, 150, 80, 150, 50);
ctx.stroke();
ctx.fill();
ctx.closePath();

}
getContext();