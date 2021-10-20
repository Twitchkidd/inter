// * Write a function decorator that takes an argument and returns a decorator
// * that can be used to check the type of the argument to a 1-argument function.
// * Should raise a TypeError if the wrong argument type was passed.

// * Coding challenge code - good luck!

const exampleType = Number;

const getTypeDescriptor = type => {
	switch (type) {
		case undefined:
			return 'undefined';
		case null:
			return 'object';
		case Boolean:
			return 'boolean';
		case Number:
			return 'number';
		case BigInt:
			return 'bigint';
		case String:
			return 'string';
		case Symbol:
			return 'symbol';
		case Function:
			return 'function';
		default:
			return 'object';
	}
};

const checkType = (func, type) => {
	const oldFunc = func;
	func = function () {
		if (typeof arguments[0] !== getTypeDescriptor(type)) throw new TypeError();
		oldFunc(arguments[0]);
	};
	return func;
};

let test = input => {
	console.log(input);
};

test = checkType(test, exampleType);

const init = () => {
	console.log(`
  Welcome to the check type function decorator program!
  `);
	test(4.5);
	test('Fear is the mind-killer');
	console.log(`
  Thanks for using the check type function decorator program!
  `);
};

init();

/*
  Okay, so how I understand a function decoration is
  you have a function, and then you say actually when
  you call that function you're calling foo(thatFunction)
  if foo is the decorator function, so:

  function check (thing) => {
    if (thing not thing we're looking for) { throw new Error(yadayada)}
    and I'm a special function that can be a decorator?
    oh it's got to take the other function and pass it through, right?
    so (thing, next) as params and then next() or return next or something?
    oh thing is going to be the function, and then the 1 argument to that
    function is the thing, right. Okay ... no, wait, you're passing the
    type to the decorator, so 
  }

  // @check
  // let checkType = n => console.log(n);

  // is like:
  // checkType = check(checkType(n))
  
  @check(Number)
  let checkType = n => console.log(n);

  is like:
  checkType = check(Number, checkType(n))
*/
