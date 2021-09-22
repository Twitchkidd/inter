// * 1. Print all even numbers from 0 – 10

const exampleTop = 10000;

const printEvens = top =>
	[...Array(top).keys()].filter(num => !(num % 2)).toString();

const init = () => {
	console.log(`
  Welcome to the print even numbers program!
  `);
	console.log(printEvens(exampleTop));
	console.log(`
  Thanks for running the print even numbers program!
  `);
};

init();
