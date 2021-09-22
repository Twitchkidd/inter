// *Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6

const numRows = 3;

const triangle = rows => {
	if (rows === 0) {
		return `
		
		`;
	} else {
		let count = 0;
		const rowsArray = [...Array(rows).keys()].map(rowIndex => {
			let row = [];
			for (let i = 0; i <= rowIndex; i++) {
				count++;
				row.push(count);
			}
			return row;
		});
		let rowsString = '';
		rowsArray.forEach(row => {
			for (let i = 0; i < row.length; i++) {
				rowsString += `${row[i]} `;
			}
			rowsString += `\n`;
		});
		return rowsString;
	}
};

const init = () => {
	console.log(`
	Welcome to the triangle program!
	`);
	console.log(triangle(numRows));
	console.log(`
	Thank you for running the triangle program!
	`);
};

init();

// console.log('Triangle program!');

// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// readline.question('How many lines in the triangle?', linesInput => {
// 	const lines = new Number(linesInput);
// 	if (typeof lines === 'number' || lines instanceof Number) {
// 		console.log(lines.valueOf());
// 	} else {
// 		console.log(typeof lines === 'number' || lines instanceof Number);
// 		console.error('Not a number!');
// 	}
// 	readline.close();
// });
