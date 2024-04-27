function isIsoscelesTriangle(side1, side2, side3) {
  // Check if any two sides are equal
  if (
    (side1 === side2 && side1 !== side3) ||
    (side2 === side3 && side2 !== side1) ||
    (side1 === side3 && side1 !== side2)
  ) {
    return true;
  } else {
    return false;
  }
}

// Example usage
const side1 = 5;
const side2 = 5;
const side3 = 3;

if (isIsoscelesTriangle(side1, side2, side3)) {
  console.log("The triangle is isosceles.");
} else {
  console.log("The triangle is not isosceles.");
}
