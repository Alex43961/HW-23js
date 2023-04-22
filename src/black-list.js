'use strict'

const randomInteger = (min, max) => {
	let random = min + Math.random() * (max - min);
	return Math.floor(random);
};

export const randomDismissed = function (arr) {
	let unluckyWorkers = [];



	let min = 0;
	let max = arr.length - 1;
	for (let i = 0; i < 3; i++) {

		let n = randomInteger(min, max);
		console.log(n);
		unluckyWorkers.push(arr[n]);
	}
	return unluckyWorkers;
}

