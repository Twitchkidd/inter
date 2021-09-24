// * Coding challenge code - good luck!

const exampleNumber = 1e5;

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

const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);

const sumPrimes = number => {
	let primes = [];
	for (let num = 0; primes.length < number; num++) {
		if (isPrime(num)) {
			primes.push(num);
		}
	}
	return sum(primes);
};

const init = () => {
	console.log(`
  Welcome to the sum of prime numbers program!
  `);
	console.log(sumPrimes(exampleNumber));
	console.log(`
  Thanks for using the sum of prime numbers program!
  `);
};

init();
