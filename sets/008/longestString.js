// * Coding challenge code - good luck!

const arrayOfStrings = [
	'strings!',
	'stringalation!',
	'string ceremony, bruhaha!',
	'strong ceremony, brohaha!',
	'numbers!',
	42,
	17,
];

const findLongestString = array =>
	array.reduce(
		(acc, cur) => {
			if (typeof cur === 'string' || cur instanceof String) {
				if (cur.valueOf().length > acc[0].length) {
					return [cur];
				}
			}
			return acc;
		},
		['']
	)[0];

const init = () => {
	console.log(`
  Welcome to the find the longest string in an array program!
  `);
	console.log(findLongestString(arrayOfStrings));
	console.log(`
  Thanks for using the find the longest string in an array program!
  `);
};

init();
