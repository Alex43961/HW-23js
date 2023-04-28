export const drawer = (workersList) => {
	const app = document.getElementById('app');

	workersList.forEach(worker => {
		const card = document.createElement('div');
		card.classList.add('employer');
		const table = document.createElement('table');
		const workerProps = Object.getOwnPropertyNames(worker);

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

		card.appendChild(table);
		app.appendChild(card);
	});
}