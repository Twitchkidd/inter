// 6. Sort an array from lowest to highest

// You could create a function for this solution as well, but be sure to try your
// program with varying lengths and types of arrays. Try one with all integers,
// another with negative numbers, and another with decimals.

const arr1 = [10, -5, -7, 2, 4, 1, 24]; // [-7, -5, 1, 2, 4, 10, 24]
const arr2 = [8.98761234, 23.08699087, 29, 25, 40.864, 0, 24]; // [0, 8.98761234, 23.08699087, 24, 25, 29, 40.864]

const sortAsc = array => array.sort((a, b) => a - b);

const init = () => {
	console.log(`
  Welcome to the sort array program!
  `);
	console.log(sortAsc(arr1));
	console.log(sortAsc(arr2));
	console.log(`
  Thank you for running the sort array program!
  `);
};

init();
