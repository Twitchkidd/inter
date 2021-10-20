# Coding Challenge!

## listOfIntegers

Returns a list of integers from 17 to 100 that are evenly divisible by 11.

```javascript
const listOfIntegers = () =>
	[...Array(84).keys()].map(n => n + 17).filter(n => n % 11 === 0);
```

## dictMapping

Returns a dictionary mapping integers to their 2.75th root for all integers from 2 up to 100 (including the 2.75th root of 100).

```javascript
const dictMapping = () => {
	const nums = [...Array(99).keys()].map(n => n + 2);
	const roots = nums.map(n => Math.pow(n, 1 / 2.75));
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		obj[nums[i]] = roots[i];
	}
	return obj;
};
```

## generateCubesUntil

Generates the cubes of integers greater than 0 until the next is 0 modulo the provided modulus.

```javascript
const generateCubesUntil = modulus => {
	let array = [];
	for (let i = 1; Math.pow(i, 3) % modulus !== 0; i++) {
		array.push(Math.pow(i, 3));
	}
	return array;
};
```

## checkType

Write a function decorator that takes an argument and returns a decorator that can be used to check the type of the argument to a 1-argument function. Should raise a TypeError if the wrong argument type was passed.

```javascript
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
```

Given four points determine if those points form a square
It's up to you how to define how square the points must be to qualify as a square

## leftTurn

Given three points return True if they form a left turn, False if they do not. If you were standing at point one, looking at point two: If point three is on your left, then these three points form a left-turn.

```javascript
const leftTurn = a => {
	const angle = rad => rad * (180 / Math.PI);
	const firstAngle = angle(Math.atan2(a[1][1] - a[0][1], a[1][0] - a[0][0]));
	const secondAngle = angle(Math.atan2(a[2][1] - a[1][1], a[2][0] - a[1][0]));
	const quad = angle =>
		angle >= 0 && angle < 90 ? 1 : angle >= 90 ? 2 : angle > -90 ? 3 : 4;
	const firstQuad = quad(firstAngle);
	if (firstQuad < 3) {
		if (secondAngle > firstAngle) {
			return true;
		}
		if (secondAngle < firstAngle - 180) {
			return true;
		}
	}
	if (firstQuad === 3) {
		if (secondAngle < firstAngle + 180 && secondAngle > firstAngle) {
			return true;
		}
	}
	if (firstQuad === 4) {
		if (secondAngle > firstAngle + 180) {
			return true;
		}
		if (secondAngle < firstAngle) {
			return true;
		}
	}
	return false;
};
```

## nearestPoint

Given a list of candidate points find the candidate point that is closest to any point in list points. Feel free to add a dependency if needed

```javascript
const distance = (p1, p2) => {
	// d = sqrt ((x2-x1)^2 + (y2-y1)^2)
	return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
};

const nearestPoint = (candidatePoints, testPoints) =>
	testPoints.reduce((acc, cur) => {
		if (acc.length === 0) {
			return [candidatePoints[0], distance(cur, candidatePoints[0])];
		}
		const distances = candidatePoints.map(cand => distance(cand, cur));
		for (let i = 0; i < distances.length; i++) {
			if (distances[i] < acc[1]) {
				return [candidatePoints[i], distances[i]];
			}
		}
		return [...acc];
	}, [])[0];
```

## isASquare

Given four points determine if those points form a square. It's up to you how to define how square the points must be to qualify as a square

```javascript
const distance = (p1, p2) => {
	// d = sqrt ((x2-x1)^2 + (y2-y1)^2)
	return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
};

const angle = rad => rad * (180 / Math.PI);

const isASquare = (points, threshold) => {
	let angles = [];
	let distances = [];
	for (let i = 3; i >= 0; i--) {
		if (i === 0) {
			distances.push(distance(points[0], points[3]));
		} else {
			distances.push(distance(points[i], points[i - 1]));
		}
	}
	for (let i = 0; i < points.length; i++) {
		let p1, p2, p3;
		p2 = points[i];
		if (i === 0) {
			p1 = points[3];
			p3 = points[1];
		} else if (i === 3) {
			p1 = points[2];
			p3 = points[0];
		} else {
			p1 = points[i - 1];
			p3 = points[i + 1];
		}
		const firstAngle = angle(Math.atan2(p2[1] - p1[1], p2[0] - p1[0]));
		const secondAngle = angle(Math.atan2(p3[1] - p2[1], p3[0] - p2[0]));
		angles.push(firstAngle - secondAngle);
	}
	const sumArray = arr => arr.reduce((acc, cur) => acc + cur, 0);
	const avgDistance = sumArray(distances) / distances.length;
	const margin = avgDistance * threshold;
	for (let i = 0; i < distances.length; i++) {
		if (Math.abs(avgDistance - distances[i]) > margin) {
			return false;
		}
	}
	for (let i = 0; i < angles.length; i++) {
		const mod = (angles[i] + 270) % 90;
		const angleMargin = threshold * 10;
		if (mod > angleMargin && mod < 90 - angleMargin) {
			return false;
		}
		if (mod > 90 + angleMargin) {
			return false;
		}
	}
	return true;
};
```
