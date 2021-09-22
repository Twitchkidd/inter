// * 2. Print a table containing multiplication tables

const exampleNum = 10;

const printTable = num => {
	// so you'll want a table header
	// then the row of 1-10 after a space (oo or an X!)
	// then each row after will have it's 1-10 label
	// and then the 10 products
	const header = `
  Multiplication Table For 1-${num}:
  
  `;
	let table = '';
	const nums = [...Array(num).keys()].map(n => n + 1);
	const rows = [...Array(num).keys(), num].map(n => n + 1);
	rows.forEach(row => {
		let rowString = '';
		if (row === 1) {
			rowString += 'X  ';
			nums.forEach(n => {
				rowString += `${n}   `;
			});
		} else {
			rowString += `  ${row - 1}  `;
			nums.forEach(n => {
				rowString += `${n * (row - 1)}   `;
			});
		}
		table += `${rowString}\n`;
	});
	const footer = `
  -----------------------------------------------------------------
  `;
	return header + table + footer;
};

const init = () => {
	console.log(`
  Welcome to the print multiplication table program!
  `);
	console.log(printTable(exampleNum));
	console.log(`
  Thanks for running the print multiplication table program!
  `);
};

init();
