/*

1. Understand 
2. Diagram 
3. Pseudocode 
4. Code 


Helper Method Recursion 

1. State Variables (optional) 
2. Return state variables (optional) 
3. Instantiate and invoke helper method 
4. Base Case(s) 
5. Recursive Case(s) 

*/

const findNumberOfPaths = matrix => {
	const traverse = (x, y) => {};

	traverse(0, 0);
};

const minStepsToOne = n => {
	const traverse = current => {
		if (current === 1) {
			return 0;
		}

		// subtract 1
		let option = traverse(current - 1);

		// divide by 3
		if (current % 3 === 0) {
			let divide3 = traverse(current / 3);
			option = Math.min(option, divide3);
		}

		// divide by 2
		if (current % 2 === 0) {
			let divide2 = traverse(current / 2);
			option = Math.min(option, divide2);
		}

		return option + 1;
	};

	return traverse(n);
};

// 1) Create cache
// 2) Check cache
// 3) Write to cache

const minStepsToOneMemo = n => {
	const cache = {};

	const traverse = current => {
		if (current in cache) {
			return cache[current];
		}
		if (current === 1) {
			return 0;
		}

		// subtract 1
		let option = traverse(current - 1);

		// divide by 3
		if (current % 3 === 0) {
			let divide3 = traverse(current / 3);
			option = Math.min(option, divide3);
		}

		// divide by 2
		if (current % 2 === 0) {
			let divide2 = traverse(current / 2);
			option = Math.min(option, divide2);
		}

		cache[current] = option + 1;
		return option + 1;
	};

	return traverse(n);
};

const table = new Array(300 + 1);

const minStepsToOneTab = n => {
	if (table[n] !== undefined) {
		return table[n];
	}
	table[1] = 0;

	for (let i = 2; i < n + 1; i++) {
		// subtract 1
		let option = table[i - 1];

		// divide by 3
		if (i % 3 === 0) {
			let divide3 = table[i / 3];
			option = Math.min(option, divide3);
		}

		// divide by 2
		if (i % 2 === 0) {
			let divide2 = table[i / 2];
			option = Math.min(option, divide2);
		}

		table[i] = option + 1;
	}

	return table[n];
};

// console.time("RECURSION: ");
// console.log(minStepsToOne(300));
// console.timeEnd("RECURSION: ");

// console.time("MEMOIZATION: ");
// console.log(minStepsToOneMemo(300));
// console.timeEnd("MEMOIZATION: ");

// console.time("TABULATION: ");
// console.log(minStepsToOneTab(300));
// console.timeEnd("TABULATION: ");

console.time('MEMOIZATION MANY: ');
for (let i = 0; i < 10000; i++) {
	minStepsToOneMemo(300);
}
console.timeEnd('MEMOIZATION MANY: ');

console.time('TABULATION MANY: ');
for (let i = 0; i < 10000; i++) {
	minStepsToOneTab(300);
}
console.timeEnd('TABULATION MANY: ');
