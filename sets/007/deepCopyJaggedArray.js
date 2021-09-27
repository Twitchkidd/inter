// * Coding challenge code - good luck!

const jaggedArray = [[42, 15], 16, [[18, 19], 17, []]];

const deepCopyJaggedArray = array => {
	// let newArr = [];
	// let level = 0;
	// const checkMoreArrays = arr => {
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (Array.isArray(arr[i])) {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// };
	// let moreArrays = checkMoreArrays(array);
	// const pushAndFill = arr => {
	//   arr.forEach(el => {
	//     if (Array.isArray(el)) {
	//       newArr[level].push([]);
	//     } else {
	//       newArr[level].push(el);
	//     }
	//   })
	// }
	// while (moreArrays) {
	//   pushAndFill()
	// }
	let newArr = array;
	// solution:
	/*
  const copyArray = ar => {
    let ar2 = [];
    for (let el of ar) {
      if (Array.isArray(el)) {
        el = copyArray(el);
      }
      ar2.push(el);
    }
    return ar2;
  }
  */
	return newArr;
};

const init = () => {
	console.log(`
  Welcome to the jagged array copying program!
  `);
	console.log(deepCopyJaggedArray(jaggedArray));
	console.log(`
  Thanks for using the jagged array copying program!
  `);
};

init();
