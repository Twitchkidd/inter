// What are the minimum steps to get to 1 if the operations are divide by 3, divide by 2, and subtract 1?

const x = 300;
const divs = [2, 3];

const quotients = (n, ds) => ds.filter(d => n % d === 0).map(d => n / d);

const minSteps = (n, ds) => {
	const traverse = cur =>
		cur === 1
			? 0
			: Math.min(traverse(cur - 1), ...quotients(cur, ds).map(traverse)) + 1;
	return traverse(n);
};

console.time(`MIN STEPS ${x}, DIV ${divs}`);
console.log(
	'\x1b[35m%s\x1b[0m',
	`Calculating minSteps(${x}, divisors: ${divs}) ...`
);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${minSteps(x, divs)}`);
console.timeEnd(`MIN STEPS ${x}, DIV ${divs}`);

const y = 5000;

const minMemo = (n, ds) => {
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

console.time(`MIN MEMO ${x}, DIV ${divs}`);
console.log(
	'\x1b[35m%s\x1b[0m',
	`Calculating minMemo(${x}, divisors: ${divs}) ...`
);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${minMemo(x, divs)}`);
console.timeEnd(`MIN MEMO ${x}, DIV ${divs}`);

console.time(`MIN MEMO ${y}, DIV ${divs}`);
console.log(
	'\x1b[35m%s\x1b[0m',
	`Calculating minMemo(${y}, divisors: ${divs}) ...`
);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${minMemo(y, divs)}`);
console.timeEnd(`MIN MEMO ${y}, DIV ${divs}`);

const z = 10_00_000;

const minTab = (n, ds) => {
	let tab = new Array(n);
	tab[1] = 0;
	for (let i = 2; i <= n; i++) {
		tab[i] = Math.min(tab[i - 1], ...quotients(i, ds).map(q => tab[q])) + 1;
	}
	return tab[n];
};

console.time(`MIN TAB ${y}, DIV ${divs}`);
console.log(
	'\x1b[35m%s\x1b[0m',
	`Calculating minTab(${y}, divisors: ${divs}) ...`
);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${minTab(y, divs)}`);
console.timeEnd(`MIN TAB ${y}, DIV ${divs}`);

console.time(`MIN TAB ${z}, DIV ${divs}`);
console.log(
	'\x1b[35m%s\x1b[0m',
	`Calculating minTab(${z}, divisors: ${divs}) ...`
);
console.log('\x1b[36m%s\x1b[0m', `Steps: ${minTab(z, divs)}`);
console.timeEnd(`MIN TAB ${z}, DIV ${divs}`);

let manyTab = new Array(z);
const minMany = (n, ds) => {
	if (manyTab[n] !== undefined) {
		return manyTab[n];
	}
	manyTab[1] = 0;
	for (let i = 2; i <= n; i++) {
		manyTab[i] =
			Math.min(manyTab[i - 1], ...quotients(i, ds).map(q => manyTab[q])) + 1;
	}
	return manyTab[n];
};
