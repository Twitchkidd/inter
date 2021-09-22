// ! Find the most repeated word in a string and the count

const str =
	'Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.';

/*
 * Welcome to the repeatedWord program!
 *
 * String:
 *  Almost nothing was more annoying than having our wasted time
 * wasted on something not worth wasting it on.
 *
 * Most repeated word:
 *  wasted
 *
 * Count:
 *  2
 *
 * Thank you for running this program, and have a nice day!
 */

const report = sentence => {
	// Words sans marks same case
	const regex = /[\W_]/g;
	const words = str
		.split(' ')
		.map(word => word.replace(regex, '').toLowerCase());
	const duplicates = words
		.reduce(
			(acc, cur) =>
				acc.map(origin => origin[0]).includes(cur)
					? acc.map(entry =>
							entry[0] === cur ? [entry[0], ++entry[1]] : entry
					  )
					: [...acc, [cur, 1]],
			[]
		)
		.sort((a, b) => b[1] - a[1]);
	if (duplicates[0][1] === 1) {
		return `
    String:
    ${sentence}
    
    No repeated words found!
    `;
	} else {
		// Todo, account for ties at the top
		return `
    String:
      ${sentence}
    
    Most repeated word:
      ${duplicates[0][0]}

    Count:
      ${duplicates[0][1]}
  `;
	}
};

const init = () => {
	console.log(`
  Welcome to the repeatedWord program!
  `);
	console.log(report(str));
	console.log(`
  Thank you for running this program, and have a nice day!
  `);
};

init();
