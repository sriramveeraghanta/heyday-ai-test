import Rectangle from "./rectangle";
import Square from "./square";

const width = 10;
const height = 20;
const rect = new Rectangle(width, height);
console.log(`Area of Rectangle is: ${rect.area()}`);

const side = 10;
const square = new Square(side);
console.log(`Area of Square with side 10 is: ${square.area()}`);
