// * Coding challenge code - good luck!

const sampleArray = [42, 32, -32, 12, 65, -76]; // [ 42, 32, 12, 65 ]

const filterNegatives = array => array.filter(num => num >= 0);

const init = () => {
	console.log(`
  Welcome to the filter out negative numbers program!
  `);
	console.log(filterNegatives(sampleArray));
	console.log(`
  Thanks for using the filter out negative numbers program!
  `);
};

init();
