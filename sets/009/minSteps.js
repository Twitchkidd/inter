// What are the minimum steps to get to 1 if the operations are divide by 3, divide by 2, and subtract 1?

// (... write a function to ...)

const x = 10;
const divs = [2, 3];

const quotients = (n, ds) => ds.filter(d => n % d === 0).map(d => n / d);

const minSteps = n => {
	if (n > 500) {
		return 'Got all day, buddy?';
	}
	const traverse = cur => {
		// base case
		if (cur === 1) {
			return 0;
		}
		// recursive cases
		let option = traverse(cur - 1);
		if (cur % 3 === 0) {
			const div3 = traverse(cur / 3);
			option = Math.min(option, div3);
		}
		if (cur % 2 === 0) {
			const div2 = traverse(cur / 2);
			option = Math.min(option, div2);
		}
		// right, because traverse can return 0, and eventually the steps reduce down to 1
		return option + 1;
	};
	return traverse(n);
};

console.time(`MINSTEPS ${x}:`);
console.log('\x1b[35m%s\x1b[0m', `Calculating minSteps(${x}) ...`);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${minSteps(x)}`);
console.timeEnd(`MINSTEPS ${x}:`);

/*

* So now the trick is to remember memoization and tabularization,
  * and to turn this into something that I would write.

*/

// almost, take a step back and try divisors first
// const ops = [n => n - 1, n => n / 3, n => n / 2];

const mn = (n, ds) => {
	const traverse = cur =>
		cur === 1
			? 0
			: Math.min(traverse(cur - 1), ...quotients(cur, ds).map(traverse)) + 1;
	return traverse(n);
};

// const mn = (n, ds) => {
// 	const traverse = cur => {
// 		if (cur === 1) return 0;
// 		// if the operation is possible, check against the reductive case
// 		const red = x => x - 1;
// 		const cases = ds.filter(d => cur % d === 0).map(d => cur / d);
//		// return Math.min(traverse(red(cur)), ...cases) + 1;
//		return Math.min(traverse(red(cur)), ...cases.map(traverse)) + 1;
// 	};
// 	return traverse(n);
// };

console.time(`MN ${x}, DIV ${divs}:`);
console.log('\x1b[35m%s\x1b[0m', `Calculating mn(${x}, divisors: ${divs}) ...`);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${mn(x, divs)}`);
console.timeEnd(`MN ${x}, DIV ${divs}:`);

const minStepsMemo = (n, ds) => {
	let cache = {};
	const traverse = cur => {
		if (cur === 1) {
			return 0;
		}
		if (cur in cache) {
			return cache[cur];
		}
		const res =
			Math.min(traverse(cur - 1), ...quotients(cur, ds).map(traverse)) + 1;
		cache[cur] = res;
		return res;
	};
	return traverse(n);
};

console.time(`MIN MEMO ${x}, DIV ${divs}:`);
console.log('\x1b[35m%s\x1b[0m', `Calculating mn(${x}, divisors: ${divs}) ...`);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${mn(x, divs)}`);
console.timeEnd(`MIN MEMO ${x}, DIV ${divs}:`);
