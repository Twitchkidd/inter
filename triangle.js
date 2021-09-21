// *Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6

console.log('Triangle program!');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('How many lines in the triangle?', linesInput => {
	const lines = new Number(linesInput);
	if (typeof lines === 'number' || lines instanceof Number) {
		console.log(lines.valueOf());
	} else {
		console.log(typeof lines === 'number' || lines instanceof Number);
		console.error('Not a number!');
	}
	readline.close();
});
