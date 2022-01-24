function fibonacci(num) {
  // type your code here
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  let lastTwo = [0, 1];
  let index = 1;
  while (index < num) {
    const nextValue = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], nextValue];
    index++;
  }
  return lastTwo[1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
