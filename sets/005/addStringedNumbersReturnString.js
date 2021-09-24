// * Coding challenge code - good luck!

const exampleNumberStringsArray = ['40', '2'];

const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);

const addNumberStrings = numberStringArray => {
	const numberArray = numberStringArray.map(string => parseFloat(string));
	const stringObj = new String(sum(numberArray));
	return stringObj.valueOf();
};

const init = () => {
	console.log(`
  Welcome to the sum of stringified and restringifying program!
  `);
	console.log(addNumberStrings(exampleNumberStringsArray));
	console.log(`
  Thanks for using the sum of stringified and restringifying program!
  `);
};

init();
