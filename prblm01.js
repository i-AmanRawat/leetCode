// question: You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
// coordinates = [
//   [1, 1],
//   [2, 2],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [7, 7],
// ];

let x1, y1;
let x2, y2;

function slopeCalculator(coordinates) {
  let slopes = [];
  for (let i = 1; i < coordinates.length; i++) {
    let firstPoint = coordinates[i - 1];
    let secondPoint = coordinates[i];
    x1 = firstPoint[0];
    y1 = firstPoint[1];
    x2 = secondPoint[0];
    y2 = secondPoint[1];
    let slope = (y2 - y1) / (x2 - x1);
    slopes.push(slope);
  }
  return slopes;
}

function straightLineChecker(slopes) {
  console.log(slopes);
  for (let i = 0; i < slopes.length; i++) {
    if (slopes[i] !== slopes[0]) {
      return false;
    }
  }
  return true;
}

straightLineChecker(slopeCalculator(coordinates))
  ? console.log("It is a straight line")
  : console.log("It is not a straight line");
