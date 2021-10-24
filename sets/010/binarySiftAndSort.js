// * Given a number, that number is how many digits of a binary you have,
// * then from the set of all permutations remove any with adjactent 1s,
// * and then print them line by line in lexicographical order.

const x = 10;

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
	const permutations = Math.pow(2, digits);
	// Ooo! Okay, what if you started to build up the set of strings for each
	// additional digit, and then you can ... yea, this needs pen and paper
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
