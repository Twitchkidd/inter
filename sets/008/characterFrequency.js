// * Coding challenge code - good luck!

const sampleString = 'What days in may, yes.';

const findMostFreqChar = string =>
	string.split('').reduce((acc, cur) => {
		const chars = acc.map(entry => entry.char);
		if (chars.includes(cur)) {
			const index = chars.indexOf(cur);
			const nextOfThisChar = {
				char: cur,
				count: acc[index].count++,
			};
			// return [...acc.slice and just don't include the index we know!]
		}
	}, []);

const init = () => {
	console.log(`
  Welcome to the find the most frequent character in a string program!
  `);
	console.log(findMostFreqChar(sampleString));
	console.log(`
  Thanks for using the find the most frequent character in a string program!
  `);
};

init();
