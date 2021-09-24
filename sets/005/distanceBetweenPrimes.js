// * Coding challenge code - good luck!

const exampleNumber = 100;

const isPrime = num => {
	if (num <= 1) {
		return false;
	}
	if (num <= 3) {
		return true;
	}
	if (num % 2 === 0) {
		return false;
	}
	const limit = Math.sqrt(num);
	for (let divisor = 3; divisor <= limit; divisor += 2) {
		if (num % divisor === 0) {
			return false;
		}
	}
	return true;
};

const rangeInPrimes = number => {
	let primes = [];
	for (let num = 0; primes.length < number; num++) {
		if (isPrime(num)) {
			primes.push(num);
		}
	}
	return primes.at(-1) - primes[0];
};

const init = () => {
	console.log(`
  Welcome to the distance between primes program!
  `);
	console.log(rangeInPrimes(exampleNumber));
	console.log(`
  Thanks for using the distance between primes program!
  `);
};

init();
