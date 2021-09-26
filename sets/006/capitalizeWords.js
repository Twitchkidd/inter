// * 32: Make a function that will capitalize the first letter of each word in a text using JavaScript.

const exampleString = `Men, today we die a little!
~ Emil Zatopek`;

// Good morning!

const capitalizeWords = string => {
	return string;
};
// .map(word => [word[0].toUpperCase(), [...word].slice(1)])
// .join(' ');

const init = () => {
	console.log(`
  Welcome to the capitalize the first letter of each word program!
  `);
	console.log(capitalizeWords(exampleString));
	console.log(`
  Thanks for using the capitalize the first letter of each word program!
  `);
};

init();
