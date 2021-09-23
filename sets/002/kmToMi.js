// * 3. Create a length converter function
// Should take in km, return miles.

// conversion rate 1 mi = 1.609344 km

// 5 -> 8.04672

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

const precisionRoundMod = (number, precision) => {
	const factor = Math.pow(10, precision);
	const n = precision < 0 ? number : 0.01 / factor + number;
	return Math.round(n * factor) / factor;
};

const milesFromKms = kms => {
	return precisionRoundMod(parseFloat(kms) * 1.609344, 6);
};

console.log(`
  Welcome to the kilometers to miles program!
  `);

readline.question('How many kilometers? ', km => {
	console.log(`${km} kilometers is ${milesFromKms(km)} miles!`);
	readline.close();
});

readline.on('close', () => {
	console.log(`
  Thank you for running the kilometers to miles program!
  `);
	process.exit(0);
});
