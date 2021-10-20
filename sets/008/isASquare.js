// * Given four points determine if those points form a square
// * It's up to you how to define how square the points must be to qualify as a square

// * Coding challenge code - good luck!

const examplePoints = [
	[18, 86],
	[111.53, 32],
	[165.53, 125.53],
	[72, 179.53],
];

const exampleThreshold = 0.2;

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

const init = () => {
	console.log(`
  Welcome to the determine if points form a square program!
  `);
	console.log(isASquare(examplePoints, exampleThreshold));
	console.log(`
  Thanks for using the determine if points form a square program!
  `);
};

init();
