// * Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// * I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1 ----------**

const assert = require('assert').strict;

/*
 * nodejs assert
 * assert(value[, message])
 * assert.deepEqual(actual, expected[, message])
 */

const arr1 = [10, 5, 7, 2, 4, 1, 24];
const arr2 = [8, 23, 29, 25, 40, 0, 24];

const init = () => {
	assert(true);
	// console.log(`
	// Welcome to the 2nd largest, 2nd smallest program!
	// `);
	// console.log(getSecondLargestAndSmallest(arr1, arr2));
	// console.log(`
	// Thank you for running the 2nd largest, 2nd smallest program!
	// `);
};

init();

// // func
// // flat
// // sort
// // set
// // return

// const getSecondLargestAndSmallest = (first, second) => {
// 	const combined = [...first, ...second];
// 	const setted = new Set(combined);
// 	if (setted.size < 2) {
// 		// ! I probably mean to throw here!
// 		return `
// 		Either one or zero unique numbers, doesn't make sense!
// 		`;
// 	} else {
// 		const arrayed = [...setted];
// 		const sorted = arrayed.sort((a, b) => b - a);
// 		// ! I should probably just return an array or an object!
// 		return `
// 		2nd Largest : ${sorted[1]}

// 		2nd Smalledt : ${sorted[sorted.length - 2]}
// 		`;
// 	}
// };
