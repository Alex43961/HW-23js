import { list } from "./list.js";


export let dataList = [];

const personExp = /Name:\s(\w+\s?\w+),\s+salary:\s(\d+\D),\s+pets:\s(\w+\s?\w+)/i;
for (let i = 0; i < list.length; i++) {
	let results = list[i].match(personExp);
	let worker = {
		name: results[1],
		salary: results[2],
		pets: results[3],
	}
	dataList.push(worker);
}








console.log(dataList);


