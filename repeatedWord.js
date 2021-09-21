// *Program to find the most repeated word in a string and the count of the word
// “Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on. ”

const str =
	'Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.';

// wordify
// count reduce foreach
// return

const regex = /[\W_]/g;

const splitStr = str.split(' ');
const sansMarksSameCase = splitStr.map(word =>
	word.replace(regex, '').toLowerCase()
);

let words = [];

sansMarksSameCase.reduce((arr, cur) => {
	let word;
	let count;
	sansMarksSameCase.forEach(wordInArray => {
		if (word === wordInArray) {
			count++;
		}
	});
	words.push();
}, []);
