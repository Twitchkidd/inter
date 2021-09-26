// 51: Write JavaScript code to find the frequency of characters inside a string.
// Return the result as an array of objects. Each object has 2 fields: character
// and number of occurrences.

const exampleString =
	'Give me your tired, your poor, your huddled masses yearning to breathe free, the wretched refuse of your teeming shore, send these, the homeless, tempest-tost to me, I lift my lamp beside the golden door!'; // ~ Emma Lazarus, 1883

const countChars = string => {
	const chars = string.split('').sort();
	if (!chars || chars.length === 0) {
		return 'No characters!';
	}
	return chars.reduce((acc, cur) => {
		/*
      [{
        character: String,
        occurrences: Int
      }, ... {}]
    */
		const loggedChars = acc.map(obj => obj.character);
		if (!loggedChars.includes(cur)) {
			return [
				...acc,
				{
					character: cur,
					occurrences: 1,
				},
			];
		}
		let newAcc = acc;
		const index = loggedChars.indexOf(cur);
		newAcc[index].occurrences++;
		return newAcc;
	}, []);
};

const init = () => {
	console.log(`
  Welcome to the count frequency of characters program!
  `);
	console.log(countChars(exampleString));
	console.log(`
  Thanks for using the count frequency of characters program!
  `);
};

init();
