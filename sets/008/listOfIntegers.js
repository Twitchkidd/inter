// * Returns a list of integers from 17 to 100 that are evenly divisible by 11.

const listOfIntegers = () =>
	[...Array(84).keys()].map(n => n + 17).filter(n => n % 11 === 0);

const init = () => {
	console.log(`
  Welcome to the display a list of integers in a range divisible by a certain number program!
  `);
	console.log(listOfIntegers());
	console.log(`
  Thanks for using the display a list of integers in a range divisible by a certain number program!
  `);
};

init();

// const start = 17;
// const finish = 100;
// const divisor = 11;
// let list = [];
// for (let i = start; i <= finish; i++) {
//   if (i % divisor === 0) {
//     list.push(i);
//   }
// }
// return list;
