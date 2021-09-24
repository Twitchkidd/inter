// * Coding challenge code - good luck!

const exampleString = `32: Make a function that will      capitalize

the first letter of each word in a \r\n\ntext using JavaScript.`;
// 32: Make A Function That Will      Capitalize
//
// The First Letter Of Each Word In A \r\n\nText Using JavaScript.

// regex for targeting each type of newline, or their combinations,
// globally and multiline, and generating indicies for substring matches
const newlineRegex = /\r/dgm;
// regex for tageting tabs,
// globally and multiline, and generating indicies for substring matches
const tabRegex = /\t/dgm;

const capitalizeWords = string => newlineRegex.exec(string).indices;
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
