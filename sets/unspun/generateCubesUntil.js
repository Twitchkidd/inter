// * Generates the cubes of integers greater than 0 until the next is 0 modulo
// * the provided modulus.

const modulus = 25;

const generateCubesUntil = modulus => {
	let array = [];
	for (let i = 1; Math.pow(i, 3) % modulus !== 0; i++) {
		array.push(Math.pow(i, 3));
	}
	return array;
};

const init = () => {
	console.log(`
  Welcome to the generate cubes until the cube modulo modulus is zero program!
  `);
	console.log(generateCubesUntil(modulus));
	console.log(`
  Thanks for using the generate cubes until the cube modulo modulus is zero program!
  `);
};

init();
