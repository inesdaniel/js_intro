// 1. Write a function that reverses a string. Don’t use the “reverse” method! 
// (Note: you can use the .split(“”) method to convert a string into an array of characters).

function reverseString(inputString) {
  var newSplitString = inputString.split("");
  var reverse = [];
  var i = newSplitString.length - 1;

  while (i >= 0) {
    reverse.push(newSplitString[i]);
    i--;
  }
  return reverse;
}
console.log(reverseString("hello"));

// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.
//    set a string value
//    loop through each character
//    determine if it is equal to "a"
//    count the number of times it is
//    print count number
function countTheA(string) {
  var splitUpString = string.split("");
  var count = 0;
  splitUpString.forEach(function(character) {
    if (character === "a") {
      count++;
    }
  });
  return count;
} 
console.log(countTheA("awesomesauce"));

// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in 
// ascending order. The second argument is a number to search for within in the array. 
// The function should do a linear search and return the index at which this value is found, 
// or it should return nil if the value is not found. See if there’s a way in which you can optimize 
// this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

// 4. Write a function that accepts two arguments. The first argument is an array of numbers that 
// are in ascending order. The second argument is a new number that is not yet in the array. 
// The function should return a new array with the new number inserted in the proper place. 
// Do not use the “sort” method!

// 5. Write a function that accepts two arguments. The first argument is an array of numbers 
// that are in ascending order. The second argument is a number that is contained within the array. 
// The function should return the string “lower” if the value is found in the lower half of the array,
// and it should return “higher” if the value is found within the greater half of the array. 
// Try to optimize this algorithm so that it takes a minimum number of steps!
