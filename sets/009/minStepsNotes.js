const minStepsToOne = n => {
	const cache = {};
	const traverse = current => {
		if (current in cache) {
		}
		// base cases and recursive cases (propagate recursion)
		if (current === 1) {
			return 0;
		}
		let option = traverse(current - 1);
		return option + 1;
	};
	return traverse(n);
};

console.log(minStepsToOne(10));

// memoization: create, check, cache

// TABULATION! so cool!

minStepsToOneTab = n => {
	let table = new Array(n + 1);
	table[1] = 0;
	for (let i = 2; i < table.length + 1; i++) {
		let option = table[i - 1];
		if (i % 3 === 0) {
			let divide3 = table[i / 3];
			option = Math.min(option, divide3);
		}
		if (i % 3 === 0) {
			let divide2 = table[i / 2];
			option = Math.min(option, divide3);
		}
		table[i] = option + 1;
	}
};

// https://replit.com/@vokoshyv/ShoddyNiftyLibrary#index.js
