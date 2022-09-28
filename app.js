const rect = require("./rectangle");
function solveRect(l, w) {
  console.log(`Solving for rectangle with dimension:${l},${w}`);
  if (l <= 0 || w <= 0) {
    console.log(
      `Rectangle dimension must be greater than zero. Received: ${l},${w}`
    );
  } else {
    console.log(`Area of rectangles:${rect.area(l, w)}`);
    console.log(`Parimeter of rectangle:${rect.parimeter(l, w)}`);
  }
}

solveRect(2, 4);
solveRect(0, 0);
