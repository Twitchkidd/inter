// * 38: Create a function that will convert an array containing ASCII codes
// * in a string using JavaScript.

const arrayOfCodes = [70, 69, 69, 69, 32, 67, 66, 68, 69, 32, 67, 65, 77, 67];

const stringifyASCIIArray = array => {
	const chars = array.map(code => String.fromCharCode(code));
	return chars.join('');
};

const init = () => {
	console.log(`
  Welcome to the ASCII array conversion program!
  `);
	console.log(stringifyASCIIArray(arrayOfCodes));
	console.log(`
  Thanks for using the ASCII array conversion program!
  `);
};

init();
