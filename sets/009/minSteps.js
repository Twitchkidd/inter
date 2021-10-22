// What are the minimum steps to get to 1 if the operations are divide by 3, divide by 2, and subtract 1?

// (... write a function to ...)

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

const x = 501;

console.time(`MINSTEPS ${x}:`);
console.log('\x1b[35m%s\x1b[0m', `Calculating minSteps(${x}) ...`);
console.log('\x1b[36m%s\x1b[0m', minSteps(x));
console.timeEnd(`MINSTEPS ${x}:`);
