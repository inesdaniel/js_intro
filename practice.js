// # Write a method that prints out every number from 1 to 100. 
// var i = 0;
while (i < 101) {
  console.log(i);
  i += 1;
}

// # Write a method that prints out every other number from 1 to 100. 
// (That is, 1, 3, 5, 7 … 99).
var i = 1;
while (i < 101) {
  console.log(i);
  i += 2;
}


// # Write a method that accepts an array of numbers as a parameter, 
// and counts how many 55’s there are in the array.


// function doubles(inputArray) {
//   var count = 0;
//   input_array.forEach(function(number) {
//     if (number === 55) {
//       count += 1;
//     }
//     console.log(number);
//   });
// }
// doubles([2, 55, 3, 55, 55]);
var numbers = [2, 55, 3, 55, 55];
var count = 0;

numbers.forEach(function(number) {
  if (number === 55) {
    count += 1;
  }
});
console.log(count);


// # Write a method that accepts an array of strings and returns a new 
//    array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"],
//  then the returned array should be 
// ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the 
// chair amount is 3.
// # The final result should be: {chair: 3, table: 2}


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}


// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// # Write a method that accepts two arrays of numbers, and prints the
// sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], 
// the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
