// * Given a list of candidate points find the candidate point
// * that is closest to any point in list points
// * Feel free to add a dependency if needed

// * Coding challenge code - good luck!

const exampleCandidatePoints = [
	[40.1, 0.1],
	[2, 1.1],
	[2, 3],
];
const exampleTestPoints = [
	[0, 0],
	[3, 4],
	[2, 1],
	[2, 4],
];

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

const init = () => {
	console.log(`
  Welcome to the find the nearest point in a set of points to a point in  another set of points program!
  `);
	console.log(nearestPoint(exampleCandidatePoints, exampleTestPoints));
	console.log(`
  Thanks for using the find the nearest point in a set of points to a point in  another set of points program!
  `);
};

init();
