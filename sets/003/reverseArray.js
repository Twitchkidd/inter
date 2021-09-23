// 5. Create a function that reverses an array

// This challenge is particularly helpful if you're planning to become a Data
// Scientist. Manipulating data is a significant part of the role, and building
// the foundations now will help you later down the road when you're working with
// large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, and
// then try your program with a larger array to verify its success.

const arr1 = [10, -5, -7, 2, 4, 1, 24]; // [24, 1, 4, 2, -7, -5, 10]

const reverse = array => array.reverse();

const init = () => {
	console.log(`
  Welcome to the reverse an array program!
  `);
	console.log(reverse(arr1));
	console.log(`
  Thank you for running the reverse an array program!
  `);
};

init();
