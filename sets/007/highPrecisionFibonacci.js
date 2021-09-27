// * Coding challenge code - good luck!

const fibLevel = 500;

const highPrecisionFib = level => {
	let acc = 0;
	for (let i = 0; i <= level; i++) {
		acc += i;
	}
	return acc;
	// solution: flipping crazy!
};

const init = () => {
	console.log(`
  Welcome to the high precision Fibonacci program!
  `);
	console.log(highPrecisionFib(fibLevel));
	console.log(`
  Thanks for using the high precision Fibonacci program!
  `);
};

init();
