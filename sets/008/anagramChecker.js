// * Coding challenge code - good luck!

const string1 = "A McDonald's Burger";
const string2 = 'Real dog and crumbs!';

const anagramComparison = (first, second) => {
	const regexForChars = /\w/g;
	const firstCharsLowerAndSorted = first
		.match(regexForChars)
		.map(char => char.toLowerCase())
		.sort();
	const secondCharsLowerAndSorted = second
		.match(regexForChars)
		.map(char => char.toLowerCase())
		.sort();
	return (
		firstCharsLowerAndSorted.length === secondCharsLowerAndSorted.length &&
		firstCharsLowerAndSorted.every(
			(value, index) => value === secondCharsLowerAndSorted[index]
		)
	);
};

const init = () => {
	console.log(`
  Welcome to the anagram checker program!
  `);
	console.log(anagramComparison(string1, string2));
	console.log(`
  Thanks for using the anagram checker program!
  `);
};

init();
