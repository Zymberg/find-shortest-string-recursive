function findShortestStringRecursive(arr) {
  // use if statement to check if the length of the array is === to 1
  if (arr.length === 1) {
    // if yes, the first element
    return arr[0];
  }
  //declare a variable and assign the value of the function with the input of arr.slice(1) to remove the elemented already checked
  const result = findShortestStringRecursive(arr.slice(1));

  //check to see if the element is smaller or equal to the result length. If yes, return the element, else return result.
  return arr[0].length <= result.length ? arr[0] : result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
