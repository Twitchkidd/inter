// * 32: Make a function that will capitalize the first letter of each word in a text using JavaScript.

const singleLineString =
	"`Make friends with pain, and you'll never be alone.` ~ Ken Chlouber";
const multiLineString = `Men, today we die a little!
~ Emil Zatopek`;

// Dealing with new lines will be part 2!

const capitalizeWord = word => {
	const regexForChar = /\w/g;
	const index = word.search(regexForChar);
	if (index !== -1) {
		const letters = word.split('');
		return [
			...letters.slice(0, index),
			letters[index].toUpperCase(),
			...letters.slice(index + 1),
		].join('');
	}
	return word;
};

const capitalizeWords = string =>
	Array.from(string.split(' '), capitalizeWord).join(' ');

const init = () => {
	console.log(`
  Welcome to the capitalize the first letter of each word program!
  `);
	console.log(capitalizeWords(singleLineString));
	console.log(`
  Thanks for using the capitalize the first letter of each word program!
  `);
};

init();
