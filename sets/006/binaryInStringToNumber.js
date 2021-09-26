// * Coding challenge code - good luck!

const stringWithBinary = 'What in the 0010011101100100110110?!';
const stringWithNumber = "Who's this guy, Agent 47?";
const stringWithBinaryAndOtherNumber =
	'kjashdlkjfhalsdkjf1234189324kljsdahlfkjasdhlkj01010101010101';
const stringWithoutNumber = 'Rock and roll!';

const turnIntoNumber = string => {
	const regexForNumbers = /\d+/g;
	const numbers = string.match(regexForNumbers);
	if (!numbers) {
		return 'No numbers!';
	}
	const binaryNumbers = numbers.filter(number => {
		const numberString = `${number}`;
		const regexForNonbinaryDigits = /[2-9]/g;
		return !regexForNonbinaryDigits.test(numberString);
	});
	if (binaryNumbers.length === 0) {
		return 'No binary numbers!';
	}
	return `First binary number: ${binaryNumbers[0]}`;
};

const init = () => {
	console.log(`
  Welcome to the turn a string with a binary into a number program!
  `);
	console.log(turnIntoNumber(stringWithBinary));
	console.log(turnIntoNumber(stringWithNumber));
	console.log(turnIntoNumber(stringWithBinaryAndOtherNumber));
	console.log(turnIntoNumber(stringWithoutNumber));
	console.log(`
  Thanks for using the turn a string with a binary into a number program!
  `);
};

init();
