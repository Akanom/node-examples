// const rectangle = require("./rectangle");
const rect = require("./rectangle");
function solveRect(l, w) {
  console.log(`Solving for rectangle with dimension:${l},${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR:", err.message);
    } else {
      console.log(`Area of rectangles with ${l},${w} is:${rectangle.area()}`);
      console.log(`Parimeter of rectangle with ${l}, ${w} is:${rectangle.parimeter()}`);
    }
  });
  console.log("This statemet is logged after the call to rect()")
}

solveRect(2, 4);
solveRect(0, 0);
