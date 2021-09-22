// *Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1 ----------**

const arr1 = [10, 5, 7, 2, 4, 1, 24];
const arr2 = [8, 23, 29, 25, 40, 0, 24];

// func
// flat
// sort
// set
// return

const getSecondLargestAndSmallest = (first, second) => {
	const combined = [...first, ...second];
	const setted = new Set(combined);
	if (setted.size < 2) {
		return `
    Either one or zero unique numbers, doesn't make sense!
    `;
	} else {
		const arrayed = [...setted];
		const sorted = arrayed.sort((a, b) => b - a);
		return `
    2nd Largest : ${sorted[1]}
    
    2nd Smalledt : ${sorted[sorted.length - 2]}
    `;
	}
};

const init = () => {
	console.log(`
  Welcome to the 2nd largest, 2nd smallest program!
  `);
	console.log(getSecondLargestAndSmallest(arr1, arr2));
	console.log(`
  Thank you for running the 2nd largest, 2nd smallest program!
  `);
};

init();
