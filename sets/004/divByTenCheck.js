// * Coding challenge code - good luck!

const exampleNumber1 = 42; // false
const exampleNumber2 = 40; // true

const divByTenCheck = number => {
	return !(number % 10);
};

const init = () => {
	console.log(`
  Welcome to the check if divisible by ten program!
  `);
	console.log(divByTenCheck(exampleNumber1));
	console.log(divByTenCheck(exampleNumber2));
	console.log(`
  Thanks for using the check if divisible by ten program!
  `);
};

init();
