// 8. Remove the spaces found in a string

// Yet another way to clean up data is to remove any errors or unnecessary
// spaces. This function will take in a string and then return it with all spaces
// removed. Think about if you were tasked with cleaning up customer data at your
// job. You could scale this function to clean up specific fields of data, such
// as zip codes.

const exampleString = `Yet another way to clean up data is to remove any errors or unnecessary
spaces. This function will take in a string and then return it with all spaces
removed. Think about if you were tasked with cleaning up customer data at your
job. You could scale this function to clean up specific fields of data, such
as zip codes.`;

// oh, actually, the repetition operator means this is a regex for any set of one or more
// spaces, newlines, tabs, and other space-like characters
// regex for either spaces, newlines, and tabs and other space-like characters
const regex = /\s+/gm;

const removeSpaces = string => string.replaceAll(regex, '');

const init = () => {
	console.log(`
  Welcome to the remove spaces program!
  `);
	console.log(removeSpaces(exampleString));
	console.log(`
  Thanks for using the remove spaces program!
  `);
};

init();
