// * Given three points return True if they form a left turn, False if they do not
// * If you were standing at point one, looking at point two: If point three is on your left,
// * then these three points form a left-turn.

// * Coding challenge code - good luck!

const points1 = [
	[0, 0],
	[2, 2],
	[2, 3],
];
const points2 = [
	[0, 0],
	[2, 2],
	[2, 1],
];
const points3 = [
	[0, 0],
	[2, 2],
	[0, 1],
];

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

const init = () => {
	console.log(`
  Welcome to the check if it's a left turn program!
  `);
	console.log(leftTurn(points1));
	console.log(leftTurn(points2));
	console.log(leftTurn(points3));
	console.log(`
  Thanks for using the check if it's a left turn program!
  `);
};

init();
