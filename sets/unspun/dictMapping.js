// * Returns a dictionary mapping integers to their 2.75th root for all integers
// * from 2 up to 100 (including the 2.75th root of 100).

const dictMapping = () => {
	const nums = [...Array(99).keys()].map(n => n + 2);
	const roots = nums.map(n => Math.pow(n, 1 / 2.75));
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		obj[nums[i]] = roots[i];
	}
	return obj;
};

const init = () => {
	console.log(`
  Welcome to the making a dictionary of integers and their 2.75th roots program!
  `);
	console.log(dictMapping());
	console.log(`
  Thanks for using the making a dictionary of integers and their 2.75th roots program!
  `);
};

init();
