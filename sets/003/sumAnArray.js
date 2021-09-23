// 4. Calculate the sum of numbers within an array

// You can create your own array of numbers but consider trying this problem with
// a few different sets to verify your solution. Have one array with negative and
// positive numbers and another with integers and decimals.

// You could also try using arrays of different lengths. If you're feeling
// comfortable with this, try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the sum of a
// particular column or row number in a table.

const arr1 = [10, -5, -7, 2, 4, 1, 24]; // 29
const arr2 = [8.98761234, 23.08699087, 29, 25, 40.864, 0, 24]; // 150.921521

const sum = array => array.reduce((acc, cur) => acc + cur, 0.0);

const init = () => {
	console.log(`
  Welcome to the sum an array program!
  `);
	console.log(sum(arr1));
	console.log(sum(arr2));
	console.log(`
  Thank you for running the sum an array program!
  `);
};

init();
