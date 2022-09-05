// Takes in 3 parameters - width, height, depth
// Returns total surface area and volume of a box arr

function getSize(width, height, depth) {
  let area = 2*((depth*width)+(depth*height)+(width*height));
  let volume = width*depth*height;
  return [area, volume];
}

console.log(getSize(4, 2, 6), [88, 48]);   
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);