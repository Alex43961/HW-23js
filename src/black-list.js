'use strict'


const randomInteger = (min, max) => {
	let random = min + Math.random() * (max - min);
	return Math.floor(random);
};

export const randomDismissed = function (workersList) {
	
	let min = 0;
	let max = workersList.length - 1;
	for (let i = 0; i < 3; i++) {
		let n = randomInteger(min, max);
		console.log(n);
		workersList[n].isActive = false;
		workersList[n].reasonOfExit = ["random"];		
	}	
}

export const currencySalary = function (workersList) {
	

	workersList.forEach(function (worker) {
		if (worker.salary.match(/\d+€/) || worker.salary.match(/\d+£/)) {
			worker.isActive = false;
			worker.reasonOfExit = ['currency'];
		}
	});
	
}

export const haveAHamster = function (workersList) {
	workersList.forEach(function (worker) {
		if (worker.pets.includes("hamster")) {
			worker.isActive = false;
			worker.reasonOfExit =['hamster'];
		}
	});	
}








