// * Coding challenge code - good luck!

const exampleString = `Create a function that'll return an integer of the number of vowels found in a
string. This is a great way to practice determining the features of a dataset.
If you use JavaScript later in your career, you'll be well-prepared to determine
what datasets (or just strings) consist of. If you feel like an extra challenge,
consider returning the number of characters.`;

const countVowels = string =>
	string
		.toLowerCase()
		.split('')
		.filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char)).length;

const init = () => {
	console.log(`
  Welcome to the count the number of vowels in a string program!
  `);
	console.log(countVowels(exampleString));
	console.log(`
  Thanks for using the count the number of vowels in a string program!
  `);
};

init();
