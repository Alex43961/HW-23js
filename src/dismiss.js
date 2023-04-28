'use strict'
export const isDismissed = function(workersList) {
	return workersList.filter(w => w.isActive === false);
}


