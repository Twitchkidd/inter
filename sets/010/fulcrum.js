// From an array of numbers, find the first index where the sum of the numbers before equals the sum of the numbers ahead, and return the index or return -1;

// const array10 = [8, 4, 6, 2, 8, 4, 2, 4, 8, 2];

// const range50 = range(50);
// const array101 = [...range50, 51, ...range50.reverse()];

// const range500 = range(500);
// const array1001 = [...range500, 501, ...range500.reverse()];

const tenK = 10_000;
const hundredK = 100_000;
const million = 1_000_000;
const tenM = 10_000_000;

const range = n => [...Array(n).keys()].map(x => x + 1);

const testArray = n => {
	const rN = range(n);
	return [...rN, 42, ...rN.reverse()];
};

// A possible rewrite would be table[0] = 0; ...
// and if (table[0] === table[1]) ...
// But for readability's sake, we'll leave it.

const firstFulcrum = arr => {
	if (arr === undefined || arr.length === 0) {
		return -1;
	}
	if (arr.length === 1) {
		return 1;
	}
	let before = Number.MAX_VALUE;
	let after = Number.MAX_VALUE;
	const sum = a => a.reduce((a, c) => a + c, 0);
	before = 0;
	after = sum(arr.slice(1));
	// console.log('sum: ', sum(arr), '\n');
	// console.log('first after: ', after, '\n');
	if (after === 0) {
		return 1;
	}
	for (let i = 1; i < arr.length; i++) {
		// console.log(i, ' before before: ', before);
		// console.log(i, ' before after: ', after);
		before += arr[i - 1];
		after -= arr[i];
		// console.log(i, ' after before: ', before);
		// console.log(i, ' after after: ', after, '\n');
		if (before === after) {
			return i;
		}
	}
	return -1;
};

const init = () => {
	console.log(`
  Welcome to the first fulcrum point checker program!
  `);
	console.time(`firstFulcrum - ${tenK}`);
	console.log(firstFulcrum(testArray(tenK)));
	console.timeEnd(`firstFulcrum - ${tenK}`);
	console.time(`firstFulcrum - ${hundredK}`);
	console.log(firstFulcrum(testArray(hundredK)));
	console.timeEnd(`firstFulcrum - ${hundredK}`);
	console.time(`firstFulcrum - ${million}`);
	console.log(firstFulcrum(testArray(million)));
	console.timeEnd(`firstFulcrum - ${million}`);
	console.time(`firstFulcrum - ${tenM}`);
	console.log(firstFulcrum(testArray(tenM)));
	console.timeEnd(`firstFulcrum - ${tenM}`);
	// console.time(`firstFulcrum - 10`);
	// console.log(firstFulcrum(array10));
	// console.timeEnd(`firstFulcrum - 10`);
	// console.time(`firstFulcrum - 101`);
	// console.log(firstFulcrum(array101));
	// console.timeEnd(`firstFulcrum - 101`);
	// console.time(`firstFulcrum - 1001`);
	// console.log(firstFulcrum(array1001));
	// console.timeEnd(`firstFulcrum - 1001`);
	console.log(`
  Thanks for using the first fulcrum point checker program!
  `);
};

init();
