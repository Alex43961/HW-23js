export const listOfEmployers = (workersList) =>{
	const employersList = document.getElementById("employersList");
	let nameList = [];
	workersList.forEach(worker =>{
		const employee = {
			name: worker.name,
		status: undefined,
		}
		if(worker.reasonOfExit) {
			employee.status = "dismissed";
		} else {
			employee.status = "active"
		}
		nameList.push(employee);
		return nameList;
	});
}


//function isDismissed (workersList) {
//	if(reasonOfExit) {
//		workersList.reasonOfExit = "dismissed";
//	}else {
//		workersList.reasonOfExit = "active";
//	}
//}



export const drawer = (workersList) => {
	const employersCards = document.getElementById('employersCards');

	workersList.forEach(worker => {
		const card = document.createElement('div');
		const avatar = document.createElement('div');
		avatar.classList.add('avatar');
		card.classList.add('employer');
		const table = document.createElement('table');
		const workerProps = Object.getOwnPropertyNames(worker);
		if(worker.reasonOfExit) {
			card.classList.add('dismissed');
		} else {
			card.classList.add("active");
		}

		workerProps.forEach(propName => {
			
			const tableRow = document.createElement('tr');
			const rowFieldName = document.createElement('td');
			const rowFieldValue = document.createElement('td');
			rowFieldName.innerHTML = propName
			rowFieldValue.innerHTML = worker[propName];
			tableRow.appendChild(rowFieldName)
			tableRow.appendChild(rowFieldValue)
			table.appendChild(tableRow)
		})
		card.appendChild(avatar);
		card.appendChild(table);		
		employersCards.appendChild(card);
	});
}