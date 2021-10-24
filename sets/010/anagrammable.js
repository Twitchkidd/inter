// * Check whether a given word is or can be rearranged to be an anagram

const abba = 'abba';
const outco = 'outco';
const abcs = 'abcdaebdc';

const annagrammable = word => {};

const init = () => {
	console.log(`
  Welcome to the does it anagram program!
  `);
	console.log(annagrammable(abba));
	console.log(annagrammable(outco));
	console.log(annagrammable(abcs));
	console.log(`
  Thanks for using the does it anagram program!
  `);
};

init();
