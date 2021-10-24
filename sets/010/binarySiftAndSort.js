// * Given a number, that number is how many digits of a binary you have,
// * then from the set of all permutations remove any with adjactent 1s,
// * and then print them line by line in lexicographical order.

const x = 5;

const siftAndSort = digits => {
	// const permutations = Math.pow(2, digits);
	// let strings = [];
	// for (let i = 0; i < permutations; i++) {
	// 	let bin = i.toString(2);
	// 	if (bin.length < digits) {
	// 		bin = '0'.repeat(digits - bin.length) + bin;
	// 	}
	// 	if (!bin.match(/1+1/g)) {
	// 		strings.push(bin);
	// 	}
	// }
	// return strings.join('\n');
	// Uh oh! This is super slow!
	// const permutations = Math.pow(2, digits);
	// const range = n => [...Array(n).keys()];
	// const toBin = n => n.toString(2);
	// const isGood = bin => !bin.match(/1+1/g);
	// return range(permutations)
	// 	.flatMap(n => (isGood(toBin(n)) ? [toBin(n)] : []))
	// 	.join('\n');
	// Uh oh! At x > 20 we max out the size of the range array!
	// const permutations = Math.pow(2, digits);
	// Ooo! Okay, what if you started to build up the set of strings for each
	// additional digit, and then you can ... yea, this needs pen and paper ...
	const plus0s = (bin, dig) => '0'.repeat(dig - bin.length) + bin;
	if (digits === 0) return '';
	if (digits === 1) return '0\n1';
	let table = new Array(digits);
	console.log(table.length);
	table[0] = ['0', '1'];
	table[1] = ['10'];
	table[2] = ['100', '101'];
	console.log('initial table ', table);
	for (let i = 3; i < digits; i++) {
		console.log('table at the top ', table);
		console.log('slice ', table.slice(0, i - 1));
		table[i] = table
			.slice(0, i - 1)
			.flat()
			.map(b => '1' + plus0s(b, i));
		console.log('table at the bottom ', table);
	}
	return table.flat().join('\n');
};

const init = () => {
	console.log(`
  Welcome to the binary string sift and sort program!
  `);
	console.time(`Sift and sort (${x})`);
	console.log(siftAndSort(x));
	console.timeEnd(`Sift and sort (${x})`);
	console.log(`
  Thanks for using the binary string sift and sort program!
  `);
};

init();
